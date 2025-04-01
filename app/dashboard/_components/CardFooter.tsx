export const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div className='absolute bottom-0 w-full bg-white/70 backdrop-blur-md p-4 flex justify-between items-center'>
    {children}
  </div>
)
