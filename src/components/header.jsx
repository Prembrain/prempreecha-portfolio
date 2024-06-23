import {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import MenuSvg from '../assets/svg/MenuSvg';
import {navlink} from '../constants'
import { useTheme } from './ThemeContext';

export default function Header(){

    const location = useLocation();

    const [openNavigation, setOpenNavigation] = useState(false)

    const { theme } = useTheme();

    function toggleNavigation(){
        if(openNavigation){
            setOpenNavigation(false);
            enablePageScroll()

        }else{
            setOpenNavigation(true)
            disablePageScroll()
        }
    }

    function handleClick(){
        if(!openNavigation) return;

        enablePageScroll()
        setOpenNavigation(false)
    }


    return(
        <nav className='fixed z-50 top-0 left-0 w-full py-4 px-6 md:px-10 shadow-md shadow-color-1 dark:shadow-boxshadowL bg-n-3 dark:bg-n-4'>
            <div className='flex justify-between items-center mx-auto max-w-[1280px]'>
                <h3 
                    className='block font-poppins h3 cursor-pointer'>
                    Prempreecha.dev
                </h3>
                <div className={`${openNavigation ? 'flex' : 'hidden'} lg:static lg:flex
                    fixed z-10 top-[4.75rem] left-0 right-0 bottom-0 shadow-mdTop dark:shadow-darkmdTop lg:shadow-none lg:dark:shadow-none bg-n-3 dark:bg-n-4 lg:bg-transparent`}
                >
                    <ul className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:px-8 lg:py-3 lg:bg-n-4 lg:dark:bg-n-2 lg:rounded-full lg:shadow-md lg:shadow-color-1'>
                        {navlink.map((item,index) => (
                            <li 
                                key={item.id}
                                onClick={handleClick}
                                className={`nav py-6 lg:py-0 hover:scale-105
                                    ${index === navlink.length-1 ? " ": "mr-0 lg:mr-10"}
                                    ${item.url === location.hash 
                                        ? "text-n-1" 
                                        : "text-color-2 dark:text-n-3 lg:text-n-3 dark:lg:text-color-2"
                                    }
                                `}
                            >
                                <a 
                                    href={item.url}
                                >
                                    {item.title}
                                </a>
                            </li>
                            )
                        )}
                    </ul>
                </div>
                    <button 
                        type='button'
                        className= "ml-auto lg:hidden px-3 py-4 bg-n-4 dark:bg-n-2 rounded-lg shadow-md shadow-color-1" 
                        onClick={toggleNavigation}
                    >
                        <MenuSvg
                        openNavigation ={openNavigation}
                        theme = {theme}
                        />
                    </button>
            </div>
        </nav>
    )
}