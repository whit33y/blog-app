function Header() {
    return (
        <header>
            <div className='flex flex-row justify-around border-b-2 border-emerald-500 mx-60'>
                <div>
                    <a href='/' className="text-4xl">Blog-app</a>
                </div>
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
        </header>

    );
}

export { Header };
