import { supabase } from "../client";
import { useEffect, useState } from "react";

function RenderPostIt() {
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
                        postData.category === 'it' ?
                            <div className="flex flex-row mx-40">
                                <img className="h-48 w-96 mr-5" src={postData.image} />
                                <div className="text-left">
                                    <h1 className="text-xl">{postData.title}</h1>
                                    <p className="text-md">{postData.description}</p>
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

export default RenderPostIt;