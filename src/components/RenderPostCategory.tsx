import { Link } from 'react-router-dom';
import { useGetPostByCategory } from "../hooks/useGetPostsCategory";
import { Post } from '../types/PostTypes';
import { useQuery } from 'react-query';

type Category = {
    category: string
};

function RenderPostCategory(props: Category) {
    const getPosts = useGetPostByCategory(props.category);
    const query = useQuery(['postsByCategory', props.category], () => getPosts);
    return (
        <div className="flex flex-row">
            <div>
                {query.isLoading ? <p className='text-2xl'>Loading ...</p> : query.isError ? <p className='text-2xl'>Error! </p> : query.data ? query.data.map((postData: Post) => (<div className="flex flex-row border-b-2 bg-gray-100">
                    <img className="h-40 w-60 sm:h-48 sm:w-72 sm:ml-0 md:ml-20 mr-5 border-2 border-sky-900 mb-4" src={postData.image} alt='Post main' />
                    <div className="text-left">
                        <Link to={`/post/${postData.id}`} className="sm:text-xl md:text-2xl hover:underline hover:cursor-pointer text-sky-900">{postData.title}  <span className="text-sm text-sky-900 hidden md:block">click to read more</span></Link>
                        <p className="sm:text-md md:text-lg font-medium sm: line-clamp-3 md:line-clamp-5 sm:mr-0 md:mr-20 text-sky-800">{postData.description}</p>
                    </div>
                </div>)) : null}
            </div>
        </div >
    );
};

export { RenderPostCategory };