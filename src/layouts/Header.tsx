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
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-lg text-emerald-500">Blog-app</h1>
                        </div>
                        <div className="flex flex-col">
                            <a href='/'>Home</a>
                            <a href='/it'>IT</a>
                            <a href='/tech'>Tech</a>
                            <a href='/health'>Health</a>
                            <a href='/lifestyle'>Lifestyle</a>
                        </div>
                    </div>
                </div>
                {isNavOpen ?
                    <div className="block md:hidden" onClick={() => handleClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 fill-black" fill="none" stroke="currentColor"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>

                    </div>
                    :
                    <div className="block md:hidden" onClick={() => handleClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-black" viewBox="0 0 448 512" stroke="currentColor">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </div>
                }
            </div>
        </header>

    );
}

export { Header };
