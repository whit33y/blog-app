import { useParams } from "react-router-dom";
import { useGetPost } from '../hooks/useGetPost';

function RenderPostDetails() {
    const { id } = useParams();
    const post = useGetPost(id);
    if (!post) return <div className="flex flex-row"><h1 className="text-3xl">Nothing found</h1></div>
    return (
        <div className='bg-slate-200 '>
            <div className='flex flex-col sm:mx-0 md:mx-20'>
                <img className='object-scale-down h-80 w-auto bg-slate-200 ' src={post.image} alt='Post' />
                <div>
                    <a href='../' className="border-2 border-black px-2 bg-emerald-400 hover:text-emerald-400 hover:bg-black duration-300 sm:mb-2 sm:ml-2 md:mb-4 ">Back</a>
                    <h1 className='text-3xl'>{post.title}<span className="text-lg text-neutral-800"><br />Category: {post.category}</span></h1>
                    <p className='text-lg text-justify font-medium tracking-widest'>{post.description}</p>
                </div>
            </div>
        </div>
    );
}

export { RenderPostDetails };