/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom'
function Footer() {
  const buttonStyle =
    'text-sky-900 border-2 border-sky-900 px-2 bg-sky-500 hover:text-sky-500 hover:bg-sky-900 duration-300 sm:mb-0 sm:ml-0 md:ml-2'
  return (
    <footer className='flex justify-between items-end h-12 mt-auto border-t-2 border-sky-900 bg-gradient-to-r from-sky-300 to-sky-400'>
      <div className='mb-2 ml-2 my-2'>
        <button className={buttonStyle}>
          <Link to='/contact'>Contact</Link>
        </button>
        <button className={buttonStyle}>
          <Link to='/about'>About</Link>
        </button>
      </div>
      <div className='flex my-2 mr-2'>
        <a href='https://github.com/whit33y'>
          <img
            className='w-6 h-6 mx-2'
            src='https://cdn-icons-png.flaticon.com/512/733/733609.png'
            alt='github'
          />
        </a>
        <a href='https://twitter.com/kubussbr'>
          <img
            className='w-6 h-6 mx-2 '
            src='https://cdn-icons-png.flaticon.com/512/733/733635.png'
            alt='twitter'
          />
        </a>
        <a href='https://www.instagram.com/kubuulek/'>
          <img
            className='w-6 h-6 mr-3'
            src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png'
            alt='instagram'
          />
        </a>
      </div>
    </footer>
  )
}

export { Footer }
