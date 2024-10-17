// /app/api/generate-image/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { prompt, apiKey } = data; // Añadido para recibir la clave API

    console.log('data in backend:', data)

    // Definir los headers
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Crear el cuerpo de la solicitud con los parámetros de imagen y la clave API
    const raw = JSON.stringify({
      "key": apiKey, // Utilizar la clave API recibida
      "model_id": "midjourney",
      "prompt": prompt,
      "negative_prompt": "",
      "width": "512",
      "height": "512",
      "samples": "1",
      "num_inference_steps": "30",
      "safety_checker": "no",
      "enhance_prompt": "yes",
      "seed": null,
      "guidance_scale": 7.5,
      "panorama": "no",
      "self_attention": "no",
      "upscale": "no",
      "embeddings_model": null,
      "lora_model": null,
      "tomesd": "yes",
      "use_karras_sigmas": "yes",
      "vae": null,
      "lora_strength": null,
      "scheduler": "UniPCMultistepScheduler",
      "webhook": null,
      "track_id": null
    });

    // Opciones para la solicitud fetch
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: raw,
    };

    // Llamada al endpoint externo para generar la imagen
    const response = await fetch("https://modelslab.com/api/v6/images/text2img", requestOptions);

    // Manejo de la respuesta
    if (!response.ok) {
      return NextResponse.json({ message: "Error en la generación de la imagen" }, { status: response.status });
    }

    const result = await response.json();
    console.log('result back img: ', result)
    return NextResponse.json(result);

  } catch (error) {
    // Manejo de errores
    console.error("Error en la API de generación de imagen:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
