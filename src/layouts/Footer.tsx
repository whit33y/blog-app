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
                <a href='#'><img className='w-4 h-4 mx-1' src='https://cdn-icons-png.flaticon.com/512/49/49354.png?w=996&t=st=1662729637~exp=1662730237~hmac=528b95b08854ad6d257ffb09c762aaa33b50127daf692c2fcf09734756010df4' /></a>
                <a href='#'><img className='w-4 h-4 mx-1' src='https://cdn-icons-png.flaticon.com/512/49/49354.png?w=996&t=st=1662729637~exp=1662730237~hmac=528b95b08854ad6d257ffb09c762aaa33b50127daf692c2fcf09734756010df4' /></a>
                <a href='#'><img className='w-4 h-4 mx-1' src='https://cdn-icons-png.flaticon.com/512/49/49354.png?w=996&t=st=1662729637~exp=1662730237~hmac=528b95b08854ad6d257ffb09c762aaa33b50127daf692c2fcf09734756010df4' /></a>
            </div>
        </footer>
    );
}

export default Footer;