import { Link, useParams } from 'react-router-dom'
import { useGetPostByCategory } from '../hooks/useGetPostsByCategory'
import { Post } from '../types/PostTypes'
import { useQuery } from 'react-query'
import { Boilerplate } from '../layouts/Boilerplate'

function RenderPostCategory() {
  const { category } = useParams()
  const getPosts = useGetPostByCategory(category)
  const { isLoading, isError, data } = useQuery(['postsByCategory', category], () => getPosts)
  return (
    <Boilerplate name={category}>
      <div className='flex flex-row'>
        <div>
          {isLoading ? (
            <p className='text-2xl'>Loading ...</p>
          ) : isError ? (
            <p className='text-2xl'>Error! </p>
          ) : data?.length == 0 ? (
            <p className='text-2xl'>Category not found! </p>
          ) : data ? (
            data.map((postData: Post) => (
              <div className='flex flex-row border-b-2 bg-gray-100' key={postData.id}>
                <img
                  className='h-40 w-60 sm:h-48 sm:w-72 sm:ml-0 md:ml-20 mr-5 border-2 border-sky-900 mb-4'
                  src={postData.image}
                  alt='Post main'
                />
                <div className='text-left'>
                  <Link
                    to={`/post/${postData.id}`}
                    className='sm:text-xl md:text-2xl hover:underline hover:cursor-pointer text-sky-900'
                  >
                    {postData.title}{' '}
                    <span className='text-sm text-sky-900 hidden md:block'>click to read more</span>
                  </Link>
                  <p className='sm:text-md md:text-lg font-medium sm: line-clamp-3 md:line-clamp-5 sm:mr-0 md:mr-20 text-sky-800'>
                    {postData.description}
                  </p>
                </div>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </Boilerplate>
  )
}

export { RenderPostCategory }
