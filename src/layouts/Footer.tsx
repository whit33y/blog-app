import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="flex justify-between items-end h-1/6 border-t-2 bg-slate-200 mt-auto ">
            <div className='mb-2'>
                <button className="border-2 border-black px-2 bg-emerald-400 hover:text-emerald-400 hover:bg-black duration-300 sm:mb-0 sm:ml-0 md:ml-2"><Link to='/contact'>Contact</Link></button>
                <button className="border-2 border-black px-2 bg-emerald-400 hover:text-emerald-400 hover:bg-black duration-300 sm:mb-0 sm:ml-0 md:ml-2"><Link to='/about'>About</Link></button>
            </div>
            <div className="flex mb-2 sm:mr-0 md:mr-2">
                <a href='https://github.com/whit33y'><img className='w-6 h-6 mx-2' src='https://cdn-icons-png.flaticon.com/512/733/733609.png' alt='github' /></a>
                <a href='https://twitter.com/kubussbr'><img className='w-6 h-6 mx-2 ' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' alt='twitter' /></a>
                <a href='https://www.instagram.com/kubuulek/'><img className='w-6 h-6 mx-2mr-3' src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png' alt='instagram' /></a>
            </div>
        </footer>
    );
}

export { Footer };