import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Whatsapp = () => {
  return (   
    <div className='position fixed bottom-16'>
      <div className='ml-4 p-2 rounded-full  flex items-center justify-center bg-green-400 w-36 md:w-40'>
      <a className=' text-white md:text-2xl' href="https://wa.me/+2348131958146" >Chat me<WhatsAppIcon className='ml-3 lg:w-10 lg:h-10'/> </a>
      </div>
    </div>
  )
}

export default Whatsapp