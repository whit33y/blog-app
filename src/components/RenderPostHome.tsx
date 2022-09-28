import { supabase } from "../client";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function RenderPostHome() {
    const [post, setPost] = useState<any>([])
    useEffect(() => {
        fetchPosts()
    }, [])
    async function fetchPosts() {
        const { data } = await supabase
            .from('posts')
            .select()
        setPost(data)
        console.log('data: ', data)
    }
    return (
        <div className="flex flex-row mx-40 p-2 border-l-2 border-r-2 pr-1  border-black">
            <div>
                {
                    post.map((postData: any) => (
                        <div className="flex flex-row border-b-2 mb-10 mx-10 ">
                            <img className="h-40 w-60 mr-5 border-2 border-black" src={postData.image} />
                            <div className="text-left">
                                <Link to={`/post/${postData.id}`} key={postData.id} className="text-2xl hover:underline hover:cursor-pointer">{postData.title} <span className="text-sm text-neutral-800">click to read more</span></Link>
                                <p className="text-lg tracking-widest font-medium line-clamp-5">{postData.description}</p>
                                <div className='text-right text-lg'>
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

export default RenderPostHome;