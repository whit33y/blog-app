import { useParams } from 'react-router-dom'
import { useGetPostDetails } from '../hooks/useGetPost'
import { Link } from 'react-router-dom'
function RenderPostDetails() {
  const { id } = useParams()
  const post = useGetPostDetails(id)
  return (
    <div className='bg-gray-100 '>
      {post?.isLoading ? (
        <p className='text-2xl'>Loading ...</p>
      ) : post?.isError ? (
        <p className='text-2xl'>Error! </p>
      ) : post?.data ? (
        <div className='flex flex-col sm:mx-0 md:mx-20'>
          <img
            className='object-scale-down h-80 w-auto bg-gray-100 mb-5'
            src={post?.data?.image}
            alt='Post main'
          />
          <div>
            <Link
              to='/'
              className='border-2 border-sky-900 text-sky-900 px-2 bg-sky-500 hover:text-sky-500 hover:bg-sky-900 duration-300 sm:mb-2 sm:ml-2 md:mb-4 '
            >
              Back{' '}
            </Link>
            <h1 className='text-3xl text-sky-900'>
              {post?.data?.title}
              <span className='text-lg text-sky-900'>
                <br />
                {post?.data?.category}
              </span>
            </h1>
            <p className='text-lg text-justify font-medium tracking-widest mb-3 text-sky-800'>
              {post?.data?.description}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export { RenderPostDetails }
