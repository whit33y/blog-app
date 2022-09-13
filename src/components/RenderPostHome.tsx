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
        <div className="flex flex-row m-3">
            <div>
                {
                    post.map((postData: any) => (
                        <div>
                            <img className="h-48 w-96" src={postData.image} />
                            <p className="text-3xl">{postData.title}</p>
                            <p className="text-lg">{postData.description}</p>
                            <p className="text-sm">{postData.category}</p>
                            <p className="text-xs">{postData.created_in}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default RenderPostHome;