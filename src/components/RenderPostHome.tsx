import { supabase } from "../client";
import { useEffect, useState } from "react";

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
        <div className="flex flex-row mx-40 p-2 border-l-2 border-r-2 pr-1  border-slate-400">
            <div>
                {
                    post.map((postData: any) => (
                        <div className="flex flex-row">
                            <img className="h-48 w-96 mr-5" src={postData.image} />
                            <div className="text-left">
                                <h1 className="text-xl">{postData.title}</h1>
                                <p className="text-md">{postData.description}</p>
                                <div className='text-right'>
                                    <h1 className="text-sm">{postData.category.toUpperCase()}</h1>
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