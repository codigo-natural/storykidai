// app/create-story/page.tsx
'use client'

import React, { useState } from 'react';
import { StorySubjectInput } from './_components/StorySubjectInput';
import { StoryType } from './_components/StoryType';
import { AgeGroup } from './_components/AgeGroup';
import { ImageStyle } from './_components/ImageStyle';
import { Button } from '@nextui-org/button';
import { chatSession } from '@/config/GeminiAI';
import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
// @ts-ignore
import uuid4 from "uuid4";
import { CustomLoader } from './_components/CustomLoader';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { toast } from 'react-toastify';
import InputContainer from '../_components/InputContainer';

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
  apiKey: string; // Añadido para almacenar la clave API del usuario
}

function CreateStory() {

  const [formData, setFormData] = useState<formDataType>({
    storySubject: '',
    storyType: '',
    imageStyle: '',
    ageGroup: '',
    apiKey: '', // Inicializado para almacenar la clave API
  });
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const notify = (msg: string) => toast(msg);
  const notifyError = (msg: string) => toast.error(msg)
  const { user } = useUser()

  /**
   * used to add data to form
   * @param data 
   */
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: formDataType) => ({
      ...prev,
      [data.fieldName]: data.fieldValue
    }));
  };

  const GenerateStory = async () => {
    setLoading(true)
    const FINAL_PROMPT = CREATE_STORY_PROMPT
      ?.replace('{ageGroup}', formData?.ageGroup ?? '')
      ?.replace('{storyType}', formData?.storyType ?? '')
      ?.replace('{storySubject}', formData?.storySubject ?? '')
      ?.replace('{imageStyle}', formData?.imageStyle ?? '')

    // Generate AI Story
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT)
      console.log(result?.response.text())
      // Manejo de errores al analizar JSON
      let story
      try {
        story = JSON.parse(result?.response.text());
      } catch (jsonError) {
        console.error("Error al analizar JSON:", jsonError);
        setLoading(false);
        return; // Salir si hay un error en el JSON
      }
      const imageResp = await axios.post('/api/generate-image', {
        prompt: `Add text with title: ${story?.cover_image?.style} in bold text for book cover, ${story?.cover_image?.description}`,
        apiKey: formData.apiKey // Añadido para enviar la clave API a la API
      })
      console.log('image response api ia: ', imageResp)

      const AiImageUrl = imageResp?.data?.output[0]

      const imageResult = await axios.post('/api/save-image', {
        url: AiImageUrl
      })

      console.log('imageResult', imageResult)

      const firebaseStorageImageUrl = imageResult.data.imageUrl;
      console.log('firebaseStorageImageUrl', firebaseStorageImageUrl)
      const response: any = await SaveInDB(result?.response.text(), firebaseStorageImageUrl)
      notify("Story generated")
      router?.replace('/view-story/' + response[0].storyId)
      setLoading(false)
    } catch (error) {
      console.log(error)
      notifyError('Server error, try again')
      setLoading(false)
    }
    // Generate Image
  }
  // Save IN DB

  const SaveInDB = async (output: string, imageUrl: string) => {
    console.log('image url provide for firebase: ', imageUrl)
    const recordId = uuid4()
    setLoading(true)
    try {
      const result = await db.insert(StoryData).values({
        storyId: recordId,
        ageGroup: formData?.ageGroup,
        imagesStyle: formData?.imageStyle,
        storySubject: formData?.storySubject,
        storyType: formData?.storyType,
        output: JSON.parse(output),
        coverImage: imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userImage: user?.imageUrl,
        userName: user?.fullName,
        apiKey: formData?.apiKey, // Añadido para almacenar la clave API
      }).returning({ storyId: StoryData?.storyId })
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="p-10 md:px-20 lg:px-40 space-y-12 font-fredoka">
      <h2 className="font-extrabold text-4xl md:text-6xl lg:text-8xl text-hallowennorange">Crea tu historia</h2>
      <p className="text-lg md:text-xl lg:text-2xl text-center text-hallowennorange">Unlock your</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandleUserSelection} />
        {/* Story Type */}
        <StoryType userSelection={onHandleUserSelection} />
        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image Style */}
        <ImageStyle userSelection={onHandleUserSelection} />
        {/* Input para la clave API */}
        <div className='md:col-span-2'>
          <InputContainer
            type="text"
            value={formData.apiKey}
            onChange={(e) => setFormData((prev) => ({ ...prev, apiKey: e.target.value }))}
            placeholder="añade tu API KEY de midjourney"
          />
        </div>
      </div>
      <div className='flex justify-center lg:justify-end'>
        <Button
          disabled={loading}
          onClick={GenerateStory}
          className={`"${loading ? 'opacity-50 cursor-wait' : ''}" bg-hallowennorange`}>
          {loading ? 'Cargando...' : 'Generar Historia'}
        </Button>
      </div>
      <CustomLoader isLoading={loading} />
    </div>
  );
}

export default CreateStory;
