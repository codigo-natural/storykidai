// app/api/save-image/route.ts
import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    let base64Image = url;
    // Si la URL no empieza con 'data:', asumimos que es una URL de imagen y la convertimos
    if (!url.startsWith('data:')) {
      base64Image = await convertImage(url);
    }
    
    if (!base64Image) {
      return NextResponse.json({ error: "Failed to process image" }, { status: 500 });
    }

    const fileName = `/ai-story/${Date.now()}-${Math.random().toString(36).substring(7)}.png`;
    const imageRef = ref(storage, fileName);

    // Asegurarse de que la cadena base64 no incluya el prefijo "data:image/png;base64,"
    const base64Data = base64Image.split(',')[1] || base64Image;

    await uploadString(imageRef, base64Data, 'base64');
    const downloadUrl = await getDownloadURL(imageRef);

    return NextResponse.json({ imageURL: downloadUrl });
  } catch (error) {
    console.error('Error saving image:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function convertImage(imageUrl: string): Promise<string | null> {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    return `data:image/png;base64,${Buffer.from(response.data).toString('base64')}`;
  } catch (error) {
    console.error('Error converting image to base64:', error);
    return null;
  }
}