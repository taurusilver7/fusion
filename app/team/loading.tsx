import Loader from '@/components/Loader'

const loading = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center h-screen'>
      <Loader color="#00aa00" />
    </div>
  )
}

export default loading