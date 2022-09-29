import { useState } from 'react'
function Footer() {
    const [display, setDisplay] = useState<boolean>(false)
    function handleClick() {
        console.log('newsletter')
    }
    return (
        <footer className="flex justify-between items-end h-1/6 mb-1 bg-slate-200">
            <div>
                <button className="border-2 border-black mb-3 ml-3 px-2 bg-emerald-400" onClick={handleClick}>Newsletter</button>
            </div>
            <div className="flex">
                <a href='https://www.facebook.com'><img className='w-6 h-6 mx-1' src='https://cdn-icons-png.flaticon.com/512/4494/4494464.png' /></a>
                <a href='https://www.instagram.com'><img className='w-6 h-6 mx-1' src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png' /></a>
                <a href='https://www.twitter.com'><img className='w-6 h-6 mx-1' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' /></a>
            </div>
        </footer>
    );
}

export default Footer;