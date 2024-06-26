import React from 'react'
import Footer from '../components/Footer'







const ContactPage = () => {
  return (
    <div>
      <div className='bg-[image:url(/imgs/banner.png)] bg-cover bg-[#111111a4] bg-blend-darken bg-center py-12'>
        <h1 className='text-center text-gray-200 text-4xl sm:text-6xl font-semibold mb-3'>#ContactUS</h1>
        <p className='text-center text-gray-200 text-[14px] sm:text-lg font-semibold'>Extra activities are also important for overall developments of students…</p>
      </div>
      <br /><br />
      <div className='flex justify-center'>
        <div className='px-10 md:px-16 lg:px-32 flex flex-col sm:flex-row max-w-[1400px] w-full'>
            <div className='flex-1'>
                <h2 className='font-bold text-3xl text-gray-900 mb-6'>Contact Us</h2>
                <div className='text-gray-700 text-sm'>
                    <b>Address:</b>
                    <p>Midway, Gofa to German Square, Addis Ababa, Ethiopia</p>
                    <br />
                    <b>Email:</b>
                    <p>info@destinyfuture.com</p>
                    <br />
                    <b>Phone:</b>
                    <p>+251 118 39 16 28</p>
                </div>   
            </div>
            <div className='flex-1'>
                <h2 className='font-bold text-3xl text-gray-900 mb-3'>Have Questions?</h2>
                <p className=' text-gray-700 text-sm'>Please feel free to reach out</p>
                <br />
                <form>
                    <div className='text-sm text-gray-700'>
                        <b>Name:</b><br />
                        <input type="text" placeholder='enter your first name...' className='border py-1 px-3 rounded outline-none mt-1 placeholder:text-xs mr-2' required/>
                        <input type="text" placeholder='enter your last name...' className='border py-1 px-3 rounded outline-none mt-1 placeholder:text-xs' required/>
                    </div>
                    <div className='text-sm text-gray-700 mt-3'>
                        <b>Email:</b><br />
                        <input type="email" placeholder='enter your email...' className='border py-1 px-3 rounded outline-none mt-1 placeholder:text-xs sm:w-[377px]' required/>
                    </div>
                    <div className='text-sm text-gray-700 mt-3'>
                        <b>Comment or Message:</b><br />
                        <textarea name="aaaa" id="" rows="5" placeholder='write your comment...' className='border py-1 px-3 rounded outline-none mt-1 placeholder:text-xs sm:w-[377px]'/>
                    </div>
                    <button className='mt-3 px-6 py-2 font-semibold bg-[#F96106] rounded-full'>Submit</button>
                </form>
            </div>
        </div>
      </div>
      
        <br /><br />
        <hr />
        <Footer/>
    </div>
  )
}

export default ContactPage
