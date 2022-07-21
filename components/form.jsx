import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then(function(response) {
      setMessage("successfully sent")
      return setTimeout(() => {
        setMessage("")
      }, 3000)
      }, function(err) {
      console.log('FAILED...', err);
    });
  }


  return (
    <div className='flex flex-col justify-center items-center mb-4'>
        <h1 className='dark:text-white'>send your email</h1>
        <form className='flex flex-col w-full max-w-3xl px-8 md:px-none' onSubmit={handleSubmit} ref={form}>
            <label htmlFor="name" className='mt-4 dark:text-white font-bold pl-2 text-xl'>Name</label>
            <input type="text" className='py-3 text-xl  font-semibold pl-2 shadow-xl mt-2 rounded-md' name="name" placeholder='Enter your name'/>

            <label htmlFor="name" className='mt-4 dark:text-white font-bold pl-2 text-xl'>Email</label>
            <input type="text" className='py-3 text-xl  font-semibold pl-2 shadow-xl mt-2 rounded-md' name="user_email" placeholder='Enter your email'/>

            <label  htmlFor="name" className='mt-4 dark:text-white font-bold pl-2 text-xl'>Description</label>
            <textarea className='py-3 shadow-xl font-semibold  pl-2 mt-2  text-xl rounded-md' name="" id="" cols="30" rows="4" placeholder='Enter your text'/>
            <Button variant="contained" className='mt-4 font-bold text-xl py-2 shadow-xl dark:bg-gray-600 bg-blue-700' type="submit" value="Send">
                submit
            </Button>
            <p className='text-2xl bg-green-500 animate-bounce mt-4 text-center'>{message}</p>
        </form>
    </div> 
  )
}

export default Form

