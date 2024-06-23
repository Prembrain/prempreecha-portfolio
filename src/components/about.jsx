import React from 'react'
import { Laptop, Person, Text } from '../assets'

export default function about(){
    return(
        <section id="about" className='relative w-full py-[4rem] md:py-[10rem] dark:bg-color-5'>
            <div className='flex justify-center items-center mx-auto max-w-[1280px]'>
                <div className='flex flex-col lg:flex-row justify-around items-center w-full px-6 gap-4'>
                    <div className='relative sm:w-[500px] sm:h-[400px] py-4'>
                        <img className=' w-80% h-auto sm:w-[450px] sm:h-[350px] rounded-[25px]' src={Laptop} alt="laptop" />
                        <img className='absolute hidden sm:block bottom-[0.5rem] right-0 w-[12rem] bg-n-3 rounded-full animate-spin-360' src={Text} alt="text" />
                        <img className='absolute hidden sm:block z-10 bottom-[5.1rem] right-[4rem] w-[60px] h-[60px]' src={Person} alt="person" />
                    </div>
                    <div className='flex flex-col justify-center gap-4 max-w-[500px]'>
                        <h4 className='h4 uppercase font-rubik text-n-1'>about us</h4>
                        <h3 className='h3 font-rubik'>Frontend Developer<br/>based in thailand📍</h3>
                        <p className='font-roboto'>Hey, my name is Prempreecha, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
                        <p className='font-roboto'>My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}