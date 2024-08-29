import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bzyldlja" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl fot-bold inline border-b-4 border-purple-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email _ angeloramarovahoaka@gmail.com </p>
            </div>
            <input type="text" className='bg-[#ccd6f6] p-2' placeholder='Name' name="name" />
            <input type="email" className='mt-4 p-2 bg-[#ccd6f6]' placeholder='Email' name='email'/>
            <textarea name="message" className="bg-[#ccd6f6] p-2 mt-4" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-4 py63 my-8 mx-auto flex items-center '>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact