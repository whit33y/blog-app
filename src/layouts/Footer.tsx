import { Link } from 'react-router-dom';
function Footer() {
    const buttonStyle = "border-2 border-black px-2 bg-emerald-500 hover:text-emerald-500 hover:bg-black duration-300 sm:mb-0 sm:ml-0 md:ml-2"
    return (
        <footer className="flex justify-between items-end h-12 mt-auto border-t-2 border-emerald-500 bg-gradient-to-r from-emerald-300 to-emerald-500">
            <div className='mb-2 ml-2 my-2'>
                <button className={buttonStyle}><Link to='/contact'>Contact</Link></button>
                <button className={buttonStyle}><Link to='/about'>About</Link></button>
            </div>
            <div className="flex my-2 mr-2">
                <a href='https://github.com/whit33y'><img className='w-6 h-6 mx-2' src='https://cdn-icons-png.flaticon.com/512/733/733609.png' alt='github' /></a>
                <a href='https://twitter.com/kubussbr'><img className='w-6 h-6 mx-2 ' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' alt='twitter' /></a>
                <a href='https://www.instagram.com/kubuulek/'><img className='w-6 h-6 mr-3' src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png' alt='instagram' /></a>
            </div>
        </footer>
    );
}

export { Footer };