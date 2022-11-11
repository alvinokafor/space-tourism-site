export default function DestinationImg({image}) {
  return (
    <div className='animate-spin-slow lg:w-96 lg:h-96  mx-auto md:w-72 md:h-72 w-44 h-44 mt-8'><img className='w-full' src={image.png}  /></div>
  )
}
