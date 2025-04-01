import Link from 'next/link'
import Card from './_components/Card'
import { Button } from './_components/Button'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen md:px-40'>
      <section className='relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden'>
        <div className='container relative px-4 md:px-6 z-20'>
          {/* <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'> */}
          <div className='grid grid-cols-2 gap-6 items-center'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='grid-cols-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm mb-6 w-auto'>
                <span className='flex items-center gap-1'>
                  {/* <Sparkles className='h-3.5 w-3.5' /> */}
                  <span>Historias mágicas con IA</span>
                </span>
              </div>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 dark:from-purple-400 dark:via-blue-400 dark:to-pink-400'>
                Crea cuentos únicos con inteligencia artificial
              </h1>
              <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Transforma tus ideas en historias fascinantes con imágenes y
                audio. Nuestra plataforma utiliza IA avanzada para crear cuentos
                personalizados en segundos.
              </p>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Link href='/crear'>
                  <Button children='Crear mi cuento' />

                  {/* <ArrowRight className='ml-2 h-4 w-4' /> */}
                </Link>
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='w-[80%] max-w-[400px]'>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='w-full py-12 md:py-24'>
        <div className='container px-4 md:px-6 flex flex-col'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm'>
                <span>Características</span>
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Crea historias como nunca antes
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Nuestra plataforma combina lo mejor de la inteligencia
                artificial para crear cuentos personalizados con texto, imágenes
                y audio.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-md opacity-25 group-hover:opacity-75 transition duration-500'></div>
              <div className='relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg h-full flex flex-col'>
                <div className='p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 w-fit mb-4'>
                  {/* <BookOpen className='h-6 w-6 text-purple-600 dark:text-purple-400' /> */}
                </div>
                <h3 className='text-xl font-bold mb-2'>Generación de texto</h3>
                <p className='text-gray-500 dark:text-gray-400 flex-grow'>
                  Nuestro modelo de IA crea historias coherentes y creativas
                  basadas en tus parámetros, adaptándose a cualquier género o
                  estilo.
                </p>
              </div>
            </div>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl blur-md opacity-25 group-hover:opacity-75 transition duration-500'></div>
              <div className='relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg h-full flex flex-col'>
                <div className='p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 w-fit mb-4'>
                  {/* <ImageIcon className='h-6 w-6 text-blue-600 dark:text-blue-400' /> */}
                </div>
                <h3 className='text-xl font-bold mb-2'>Ilustraciones únicas</h3>
                <p className='text-gray-500 dark:text-gray-400 flex-grow'>
                  Cada historia viene con imágenes generadas por IA que
                  complementan perfectamente la narrativa, creando una
                  experiencia visual inmersiva.
                </p>
              </div>
            </div>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-75 transition duration-500'></div>
              <div className='relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg h-full flex flex-col'>
                <div className='p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 w-fit mb-4'>
                  {/* <Headphones className='h-6 w-6 text-pink-600 dark:text-pink-400' /> */}
                </div>
                <h3 className='text-xl font-bold mb-2'>Narración por voz</h3>
                <p className='text-gray-500 dark:text-gray-400 flex-grow'>
                  Escucha tus cuentos narrados con voces naturales que dan vida
                  a los personajes y situaciones de tu historia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full py-12 md:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-pink-950/30'>
        <div className='container px-4 md:px-6 flex flex-col'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                ¿Listo para crear tu historia?
              </h2>
              <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Comienza ahora y descubre el poder de la narración impulsada por
                inteligencia artificial.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='/create-story'>
                <Button children='Crear mi cuento' />
                {/* <ArrowRight className='ml-2 h-4 w-4' /> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
