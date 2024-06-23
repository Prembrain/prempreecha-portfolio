import { useTheme } from './ThemeContext';
import {project} from '../constants'
import { GithubDark, GithubLight, PopupLight, Popupdark } from '../assets'

export default function Project(){
    const { theme } = useTheme();

    const popup = theme === 'light' ? Popupdark : PopupLight;
    const githubIcon = theme === 'light' ? GithubLight : GithubDark;

    return(
        <section id="projects" className='relative w-full py-[4rem] md:py-[10rem] bg-color-3 dark:bg-n-4'>
            <div className='mx-auto max-w-[1280px]  px-6 xl:px-10'>
                <p className='h4 uppercase font-rubik text-n-1 mb-4 text-center lg:text-start'>portfolio</p>
                <h2 className='h2 font-rubik font-semibold mb-16 text-center lg:text-start'>Each project is a unique piece of development🧩</h2>
                    {project.map((item, index) => {
                        if(index % 2 === 0){
                            return(
                                <div 
                                    key={item.id}
                                    className='flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-0 mb-16'
                                >
                                    <img 
                                        className='rounded-[25px]'
                                        src={item.img} 
                                        alt="projectImg" 
                                        width={450}
                                    />
                                    <div className='flex flex-col max-w-[450px] gap-5 text-center'>
                                        <h4 className='h4 font-rubik uppercase'>{item.title}</h4>
                                        <p className=''>{item.detail}</p>
                                        <div className='flex justify-center items-center gap-4'>
                                            <h4 className='h4 font-medium'>{item.tech.tech1}</h4>
                                            <h4 className='h4 font-medium'>{item.tech.tech2}</h4>
                                        </div>
                                        <div className='flex justify-center items-center gap-8'>
                                            <a 
                                                href= {item.gitlink}
                                                target="_blank"
                                                className='flex items-center hover:scale-105 cursor-pointer'
                                            >
                                                <h4 className='h4 font-medium tracking-tight'>{item.git}</h4>
                                                <img 
                                                    src={githubIcon} 
                                                    alt="github" width={30}
                                                />
                                            </a>
                                            <a
                                                href= {item.demolive}
                                                target="_blank" 
                                                className='flex items-center hover:scale-105 cursor-pointer'
                                            > 
                                                <h4 className='h4 font-medium tracking-tight'>{item.live}</h4>
                                                <img 
                                                    src={popup} 
                                                    alt="popup" width={30}
                                                    className='p-1'
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div 
                                    key={item.id}
                                    className='flex flex-col lg:flex-row-reverse justify-around items-center gap-6 lg:gap-0 mb-16'
                                >
                                       <img 
                                            className='rounded-[25px]'
                                            src={item.img} 
                                            alt="projectImg" 
                                            width={450}
                                        />
                                        <div className='flex flex-col max-w-[450px] gap-5 text-center'>
                                            <h4 className='h4 font-rubik uppercase'>{item.title}</h4>
                                            <p className=''>{item.detail}</p>
                                            <div className='flex justify-center items-center gap-4'>
                                                <h4 className='h4 font-medium'>{item.tech.tech1}</h4>
                                                <h4 className='h4 font-medium'>{item.tech.tech2}</h4>
                                            </div>
                                            <div className='flex justify-center items-center gap-8'>
                                                <a 
                                                    href= {item.gitlink}
                                                    target="_blank"
                                                    className='flex items-center hover:scale-105 cursor-pointer'
                                                >
                                                    <h4 className='h4 font-medium tracking-tight'>{item.git}</h4>
                                                    <img 
                                                        src={githubIcon} 
                                                        alt="github" width={30}
                                                    />
                                                </a>
                                                <a
                                                    href= {item.demolive}
                                                    target="_blank" 
                                                    className='flex items-center hover:scale-105 cursor-pointer'
                                                > 
                                                    <h4 className='h4 font-medium tracking-tight'>{item.live}</h4>
                                                    <img 
                                                        src={popup} 
                                                        alt="popup" width={30}
                                                        className='p-1 hover:scale-105'
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                </div>
                            )
                        }    
                    })}
            </div>
        </section>
    )
}