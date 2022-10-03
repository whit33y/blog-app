import { Link } from 'react-router-dom'
import { useGetPostsCategory } from "../hooks/useGetPostsCategory";

function RenderPostTech() {
    const post = useGetPostsCategory('tech')
    if (!post) return <div className="flex flex-row"><h1 className="text-3xl">Loading</h1></div>
    return (
        <div className="flex flex-row">
            <div>
                {
                    post.map((postData: any) => (
                        postData.category === 'tech' ?
                            <div className="flex flex-row border-b-2">
                                <img className="h-40 w-60 mr-5 border-2 border-black" src={postData.image} />
                                <div className="text-left">
                                    <Link to={`/post/${postData.id}`} className="text-2xl hover:underline hover:cursor-pointer">{postData.title}  <span className="text-sm text-neutral-800 hidden md:block">click to read more</span></Link>
                                    <p className="text-lg tracking-widest font-medium sm: line-clamp-3 md:line-clamp-5">{postData.description}</p>
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