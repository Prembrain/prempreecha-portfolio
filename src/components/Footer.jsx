import React from 'react'
import { useTheme } from './ThemeContext';
import {GithubDark, GithubLight, LinkedinDark, LinkedinLight} from '../assets';

export default function Footer(){

    const { theme } = useTheme();
    const githubIcon = theme === 'light' ?  GithubDark : GithubLight;
    const linkedinIcon = theme === 'light' ? LinkedinDark : LinkedinLight;

    return(
        <footer className='relative w-full py-[4rem] bg-n-4 dark:bg-n-3 '>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center mx-auto max-w-[1280px] px-6 xl:px-10 gap-6 lg:gap-0'>
                <p className='text-n-2 dark:text-n-4'>
                        ©{new Date().getFullYear()} Prempreecha. All rights reserved. 
                </p>
                <div className='flex items-center gap-4'>
                    <a href="https://www.linkedin.com/in/prempreecha-nangtin-226237233/" target="_blank">
                        <img className='w-[32px] h-[32px] xl:w-[40px] xl:h-[40px] hover:scale-105' src={linkedinIcon} alt="linkIn" />
                    </a>
                    <a href="https://github.com/Prembrain" target="_blank">
                        <img className='w-[32px] h-[32px] xl:w-[40px] xl:h-[40px] hover:scale-105' src={githubIcon} alt="linkIn" />
                    </a>
                </div>
            </div>
        </footer>
    )
}