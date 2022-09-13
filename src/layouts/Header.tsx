function Header() {
    return (
        <header className="flex justify-between h-1/6">
            <div className="flex-auto w-2/5 text-center">
                <p className="text-4xl">Blog<br />-app</p>
            </div>
            <div className="flex-auto w-3/5">
                <nav className="mb-8 flex justify-center">
                    <a href='/' className="hover:underline m-1 text-lg">Home</a>
                    <a href='/about' className="hover:underline m-1 text-lg">About</a>
                    <a href='/contact' className="hover:underline m-1 text-lg">Contact</a>
                </nav>
                <nav className="flex justify-center">
                    <a href='/it' className="hover:underline m-1 text-lg">IT</a>
                    <a href='/tech' className="hover:underline m-1 text-lg">Technology</a>
                    <a href='/lifestyle' className="hover:underline m-1 text-lg">Lifestyle</a>
                    <a href='/health' className="hover:underline m-1 text-lg">Health</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;