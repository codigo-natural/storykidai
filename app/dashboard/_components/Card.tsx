export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className='relative w-full h-[300px] col-span-12 sm:col-span-5 rounded-2xl shadow-lg overflow-hidden hover:outline hover:outline-cyan-500 cursor-pointer bg-white'>
    {children}
  </div>
)
