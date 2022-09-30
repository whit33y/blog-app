import { Link } from 'react-router-dom'
import { useGetPosts } from "../hooks/useGetPosts";

function RenderPostTech() {
    const post = useGetPosts('tech')
    if (!post) return <div className="flex flex-row mx-40 p-2 border-l-2 border-r-2 pr-1  border-slate-400"><h1 className="text-3xl">Loading</h1></div>
    return (
        <div className="flex flex-row mx-40 p-2 border-l-2 border-r-2 pr-1  border-slate-400">
            <div>
                {
                    post.map((postData: any) => (
                        postData.category === 'tech' ?
                            <div className="flex flex-row border-b-2 mb-10 mx-10">
                                <img className="h-48 w-96 mr-5" src={postData.image} />
                                <div className="text-left">
                                    <Link to={`/post/${postData.id}`} className="text-2xl hover:underline hover:cursor-pointer">{postData.title}  <span className="text-sm text-neutral-800  ">click to read more</span></Link>
                                    <p className="text-lg tracking-widest font-medium line-clamp-6">{postData.description}</p>
                                    <div className='text-right'>
                                    </div>
                                </div>
                            </div> : <div></div>
                    ))
                }
            </div>
        </div >
    );
}

export default RenderPostTech;