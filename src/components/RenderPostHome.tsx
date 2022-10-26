import { Link } from 'react-router-dom'
import { Post } from '../types/PostTypes'
import { useQuery } from 'react-query'
import { useGetAllPosts } from '../hooks/useGetAllPosts'
function RenderPostHome() {
  const query = useQuery(['posts'], useGetAllPosts)
  return (
    <div className='flex flex-row'>
      <div>
        {query.isLoading ? (
          <p className='text-2xl'>Loading ...</p>
        ) : query.isError ? (
          <p className='text-2xl'>Error! </p>
        ) : query.data ? (
          query.data.map((postData: Post) => (
            <div className='flex flex-row border-b-2 bg-gray-100 ' key={postData.id}>
              <img
                className='h-40 w-60 sm:h-48 sm:w-72  sm:ml-0 md:ml-20  mr-5 border-2 border-sky-900 mb-4'
                src={postData.image}
                alt='Post home'
              />
              <div className='text-left'>
                <Link
                  to={`/post/${postData.id}`}
                  key={postData.id}
                  className='text-sky-900 sm:text-lg md:text-2xl hover:underline hover:cursor-pointer'
                >
                  {postData.title}{' '}
                  <span className='text-sm text-sky-900 hidden md:block '>click to read more</span>
                </Link>
                <p className='sm:text-md md:text-lg sm:mr-0 md:mr-20 font-medium sm: line-clamp-3 md:line-clamp-4 text-sky-800'>
                  {postData.description}
                </p>
                <div className='text-right text-lg hidden md:block sm:mr-0 md:mr-20 '>
                  <Link
                    to={postData.category}
                    className='hover:underline hover:cursor-pointer text-sky-900'
                  >
                    {postData.category}
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}

export { RenderPostHome }
