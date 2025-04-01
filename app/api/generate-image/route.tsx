import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'

export async function POST(req: NextRequest) {
  try {
    const { prompt, apiKey } = await req.json()

    // Verificar si prompt y apiKey están presentes
    if (!prompt || !apiKey) {
      console.error('Error: Missing prompt or API key')
      return NextResponse.json(
        { error: 'Prompt and API key are required' },
        { status: 400 }
      )
    }

    console.log('Received prompt:', prompt, 'API Key:', apiKey)

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    })

    const input = {
      prompt: prompt,
      output_format: 'png',
      output_quality: 80,
      aspect_ratio: '1:1',
    }

    let output

    try {
      // Intentar correr el modelo de Replicate
      output = await replicate.run('black-forest-labs/flux-schnell', { input })
    } catch (apiError) {
      console.error('Error al llamar a la API de Replicate:', apiError)
      return NextResponse.json(
        { error: 'Failed to generate image from API' },
        { status: 500 }
      )
    }

    // Verificar si la respuesta es un array y contiene al menos un elemento
    if (!Array.isArray(output) || output.length === 0) {
      console.error('Error: API response is not valid', output)
      return NextResponse.json(
        { error: 'Invalid API response' },
        { status: 500 }
      )
    }

    console.log('Generated image URL:', output[0])

    // Devolver la URL de la imagen generada
    return NextResponse.json({ imageUrl: output[0] })
  } catch (error) {
    // Manejo de cualquier otro error inesperado
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
