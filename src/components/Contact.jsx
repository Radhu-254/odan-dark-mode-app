import React from 'react'
import YellowBtn from './YellowBtn'

const Contact = () => {


  return (
    

    <div className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'  name="contact us">
    <h3 className="text-5xl font-bold text-center"> Contact Us</h3>
    <div className='flex flex-col items-center justify-centergap-8 text-center'>

        {/* Form */}
        <div className='p-8 text-left w-full flex items-center justify-center'>
            <form action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4 " method="POST">
                <div className='gap-4 w-full'>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-bold"> 
                          name
                        </label>
                        <input 
                           type="text" 
                           name="name" 
                           className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400'
                        />
                    </div>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-bold"> 
                          phone
                        </label>
                        <input 
                           type="text" 
                           name="phone" 
                           className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400'
                        />
                    </div>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-bold"> 
                          email
                        </label>
                        <input 
                           type="text" 
                           name="email" 
                           className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400'
                        />
                    </div>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-bold"> 
                          message
                        </label>
                        <textarea
                          name="message"
                          rows="10"
                          className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400 resize-none'
                        ></textarea>
                        
                       
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                <YellowBtn
                   title="send message"
                  className="uppercase py-3 px-6 w-full my-12"
                 />

                </div>


            </form>

        </div>
    </div>


    </div>
  )
}

export default Contact