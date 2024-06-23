import React from 'react'
import { Email, Phone } from '../assets'

export default function Contact(){
    return(
        <section id="contact" className='relative w-full py-[4rem] md:py-[10rem] dark:bg-color-5'>
            <div className='mx-auto max-w-[1280px] px-6 xl:px-10'>
                <p className='h4 uppercase font-rubik text-n-1 mb-4  text-center lg:text-start'>contact</p>
                <h2 className='h2 font-rubik font-semibold mb-16 text-center lg:text-start'>Don't be shy! Hit me up! 👇</h2>
                <div className='flex flex-col items-center lg:flex-row gap-10 lg:gap-[10rem]'>
                    <a 
                        href='tel:+66940193640'
                        className='flex flex-col lg:flex-row items-center text-center lg:text-start gap-4 hover:scale-105'>
                        <img className='p-1 shadow-circleL dark:shadow-circleW rounded-full' src={Phone} alt="phone" width={50}/>
                        <div>
                            <h4 className='h4 font-medium'>Phone Number</h4>
                            <p>094-019-3640</p>
                        </div>
                    </a>
                    <a 
                        href='mailto:prempreecha.n@gmail.com'
                        className='flex flex-col lg:flex-row items-center text-center lg:text-start gap-4 hover:scale-105'
                    >
                        <img  className='p-1.5 shadow-circleL dark:shadow-circleW rounded-full' src={Email} alt="email" width={50}/>
                        <div>
                            <h4 className='h4 font-medium'>Mail</h4>
                            <p>prempreecha.n@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}