import { useState } from 'react'
function Footer() {
    const [displayNewsletter, setDisplayNewsletter] = useState<boolean>(false)
    function handleClick() {
        console.log('newsletter')
    }
    return (
        <footer className="flex justify-between items-end h-1/6 border-t-2 bg-slate-200">
            <div>
                <button className="border-2 border-black px-2 bg-emerald-400 hover:text-emerald-400 hover:bg-black duration-300" onClick={handleClick}>Newsletter</button>
            </div>
            <div className="flex">
                <a href='https://www.facebook.com'><img className='w-6 h-6 mx-1' src='https://cdn-icons-png.flaticon.com/512/4494/4494464.png' /></a>
                <a href='https://www.instagram.com'><img className='w-6 h-6 mx-1' src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png' /></a>
                <a href='https://www.twitter.com'><img className='w-6 h-6 mx-1' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' /></a>
            </div>
        </footer>
    );
}

export { Footer };