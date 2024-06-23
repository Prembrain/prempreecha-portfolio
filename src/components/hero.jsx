import { useTheme } from './ThemeContext';
import { Hand, Profile,  Moon, Sun,GithubDark, GithubLight, LinkedinDark, LinkedinLight, Html, Css, Javascript, Typescript, React, Nextjsdark, Nextjswhite, Tailwind, Flutter} from '../assets';

export default function Hero(){
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? Sun : Moon;
    const githubIcon = theme === 'light' ? GithubLight : GithubDark;
    const linkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;
    const nextjs = theme === 'light' ? Nextjswhite : Nextjsdark

    return(
        <section id="home" className='flex h-auto lg:h-[100dvh] w-full py-[4rem] lg:py-[6rem] 2xl:py-[15rem] bg-color-3 dark:bg-n-4'>
            <div className='mx-auto w-full'>
                <div className='flex flex-col max-w-[1280px] mx-auto gap-4 xs2:gap-10'>
                    <article className='flex flex-col lg:flex-row-reverse justify-around items-center w-full text-center gap-4 xs2:gap-6'>
                        <div className='relative w-[250px] md:w-[350px] xl:w-[400px]'>
                            <img className='w-full rounded-full' src={Profile} alt="profile" />
                            <img 
                                className='absolute top-2 right-0.25 xs2:top-2 xs2:right-2 w-[25px] h-[25px] cursor-pointer hover:cursor-pointer '
                                onClick={toggleTheme} 
                                src={themeIcon} 
                                alt="themeIcon" 
                                />
                        </div>
                        <div className='flex flex-col gap-4 xs2:gap-6 max-w-[31.25rem]'>
                            <div className='relative max-w-[20rem] lg:max-w-[31.25rem] mx-auto'>
                                <h1 className='h1 font-rubik uppercase'>Frontend <br/>Developer</h1>
                                <img 
                                    className='absolute hidden xs:block top-3 -right-14 md:top-2 md:-right-[70px] w-12 h-12 md:w-15 md:h-15' 
                                    src={Hand} 
                                    alt="Hand"
                                    />
                            </div>
                            <p className='body-1 font-roboto'>
                                Hi,I'm Prempreecha Nangtin. I have a passion for Frontend Development and I'm eager to grow into a Fullstack Developer.
                            </p>
                            <span className='flex justify-center items-center cursor-pointer gap-4'>
                                <a href="https://www.linkedin.com/in/prempreecha-nangtin-226237233/" target="_blank">
                                    <img className='w-[32px] h-[32px] xl:w-[40px] xl:h-[40px] hover:scale-105' src={linkedinIcon} alt="linkIn" />
                                </a>
                                <a href="https://github.com/Prembrain" target="_blank">
                                    <img className='w-[32px] h-[32px] xl:w-[40px] xl:h-[40px] hover:scale-105' src={githubIcon} alt="linkIn" />
                                </a>
                            </span>
                        </div>
                    </article>
                    <article className='flex flex-col lg:flex-row justify-center items-center gap-4 xs2:gap-6'>
                        <p className='lg:pr-8 lg:mr-16 pb-2 lg:pb-0 border-b-2 lg:border-b-0 lg:border-r-2 text-n-4 dark:text-n-3 border-n-4 dark:border-n-3 border-opacity-60'>Tech Stack</p>
                        <ul className='flex flex-wrap justify-center gap-4 xs2:gap-6'>
                            <li className='flex gap-x-3'>
                                <img className='w-[35px] xs2:w-[50px] rounded-xl hover:scale-105' src={Html} alt="html" />
                                <img className='w-[35px] xs2:w-[50px] rounded-xl hover:scale-105' src={Css} alt="css" />
                            </li>
                            <li className='flex gap-x-3'>
                                <img className='w-[35px] xs2:w-[50px] rounded-xl hover:scale-105' src={Javascript} alt="html" />
                                <img className='w-[35px] xs2:w-[50px] rounded-xl hover:scale-105' src={Typescript} alt="css" />
                            </li>
                            <li className='flex gap-x-3'>
                                <img className='w-[35px] xs2:w-[50px] rounded-xl bg-n-4 dark:bg-n-3 hover:scale-105' src={React} alt="html" />
                                <img className='w-[35px] xs2:w-[50px] rounded-xl hover:scale-105' src={nextjs} alt="css" />
                            </li>
                            <li className='flex gap-x-3'>
                                <img className='w-[35px] xs2:w-[50px] rounded-xl bg-n-4 dark:bg-n-3 hover:scale-105' src={Tailwind} alt="html" />
                                <img className='w-[35px] xs2:w-[50px] rounded-xl bg-n-4 dark:bg-n-3 hover:scale-105' src={Flutter} alt="css" />
                            </li>
                        </ul>
                    </article>
                </div> 
            </div>
        </section>
    )
}


