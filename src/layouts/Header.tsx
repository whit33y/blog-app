import { useState } from "react";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    function handleClick() {
        setIsNavOpen((prev) => !prev)
        console.log('clicked')
    }
    return (
        <header>
            <div className='flex flex-row justify-around border-b-2 border-emerald-500'>
                <div>
                    <a href='/' className={isNavOpen ? 'hidden md:block lg:text-4xl md:text-2xl sm:text-xl' : 'lg:text-4xl md:text-2xl sm:text-xl'}>Blog-app</a>
                </div>
                <div className="hidden md:block">
                    <div className="flex flex-col">
                        <div>
                            <a href='/' className="text-lg mx-2 hover:underline hover:cursor-pointer hover:text-emerald-500 duration-300">Home</a>
                            <a href='/about' className="text-lg mx-2 hover:underline hover:cursor-pointer hover:text-emerald-500 duration-300">About</a>
                            <a href='/contact' className="text-lg mx-2 hover:underline hover:cursor-pointer hover:text-emerald-500 duration-300">Contact</a>
                        </div>
                        <div>
                            <a href='/it' className="text-lg mx-2 hover:underline hover:cursor-pointer hover:text-emerald-500 duration-300">IT</a>
                            <a href='/tech' className="text-lg mx-2 hover:underline hover:cursor-pointer hover:text-emerald-500 duration-300">Tech</a>
                            <a href='/health' className="text-lg mx-2 hover:underline hover:cursor-pointer hover:text-emerald-500 duration-300">Health</a>
                            <a href='/lifestyle' className="text-lg mx-2 hover:underline hover:cursor-pointer hover:text-emerald-500 duration-300">Lifestyle</a>
                        </div>
                    </div>
                </div>
                <div className={isNavOpen ? 'block md:hidden' : 'hidden'}>
                    <div className="flex flex-col justify-center">
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/contact'>Contact</a>
                        <a href='/it'>IT</a>
                        <a href='/tech'>Tech</a>
                        <a href='/health'>Health</a>
                        <a href='/lifestyle'>Lifestyle</a>
                    </div>
                </div>
                <div className="block md:hidden" onClick={() => handleClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </header>

    );
}

export { Header };
