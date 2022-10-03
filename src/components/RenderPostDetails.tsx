import { useParams } from "react-router-dom";
import { useGetPost } from '../hooks/useGetPost';

function RenderPostDetails() {
    const { id } = useParams();
    console.log(id)
    const post = useGetPost(id)
    if (!post) return <div className="flex flex-row border-l-2 border-r-2 border-emerald-500"><h1 className="text-3xl">Nothing found</h1></div>
    return (
        <div className='bg-slate-200 '>
            <div className='flex flex-col border-emerald-500 bg-slate-200'>
                <img className='object-scale-down h-80 w-auto bg-slate-200' src={post.image} />
                <div>
                    <h1 className='text-3xl'>{post.title}<span className="text-lg text-neutral-800"><br />Category: {post.category}</span></h1>
                    <p className='text-lg text-justify font-medium tracking-widest'>{post.description}</p>
                    <a href='../' className="border-2 border-black bg-emerald-400 hover:text-emerald-400 hover:bg-black duration-300">Back</a>
                </div>
            </div>
        </div>
    );
}

export { RenderPostDetails };