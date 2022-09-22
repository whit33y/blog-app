import { useState, useEffect } from 'react'
import { supabase } from '../client';
import { useParams } from "react-router-dom";

function PostDetails() {
    const [post, setPost] = useState<any>([])
    const { id } = useParams();
    useEffect(() => {
        fetchPosts()
    }, [])
    async function fetchPosts() {
        const { data } = await supabase
            .from('posts')
            .select()
            .eq('id', id)
        setPost(data)
        console.log('data: ', data)
    }
    return (
        <div>
            {
                post.map((postData: any) => (
                    <div>
                        {postData.title}
                    </div>
                ))
            }
        </div>
    );
}

export default PostDetails;