import { Link } from 'react-router-dom';
import { useGetAllPosts } from "../hooks/useGetAllPosts";
import { Post } from '../types/Post'

function RenderPostHome() {
    const post = useGetAllPosts();
    console.log(typeof (post))
    if (!post) return <div className="flex flex-row"><h1 className="text-3xl">Loading</h1></div>
    return (
        <div className="flex flex-row">
            <div>
                {
                    post.map((postData: Post) => (
                        <div className="flex flex-row border-b-2 bg-slate-200 ">
                            <img className="h-40 w-60 sm:ml-0 md:ml-20  mr-5 border-2 border-black" src={postData.image} />
                            <div className="text-left">
                                <Link to={`/post/${postData.id}`} key={postData.id} className="sm:text-lg md:text-2xl hover:underline hover:cursor-pointer ">{postData.title} <span className="text-sm text-neutral-800 hidden md:block">click to read more</span></Link>
                                <p className="sm:text-md md:text-lg sm:mr-0 md:mr-20 font-medium sm: line-clamp-3 md:line-clamp-4">{postData.description}</p>
                                <div className='text-right text-lg hidden md:block sm:mr-0 md:mr-20'>
                                    <a href={postData.category}>{postData.category}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export { RenderPostHome };