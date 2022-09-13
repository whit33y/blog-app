import { supabase } from "../client";
import { useEffect, useState } from "react";
type dataType = {
    postData: any
}
function RenderPost() {
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
        <div className="flex flex-row mb-3">
            <div>
                {
                    post.map((postData: any) => (
                        <div>
                            <p className="text-3xl">{postData.title}</p>
                            <p className="text-lg">{postData.description}</p>
                            <p className="text-sm">{postData.created_in}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RenderPost;