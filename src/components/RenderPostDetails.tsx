import { useState, useEffect } from 'react'
import { supabase } from '../client';
import { useParams } from "react-router-dom";
import Boilerplate from '../layouts/Boilerplate';

function RenderPostDetails() {
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
                    <div className='flex flex-row mx-40 p-2  border-slate-400'>
                        <img className='h-48 w-96' src={postData.image} />
                        <div>
                            <h1 className='text-2xl'>{postData.title}</h1>
                            <p className='text-lg'>{postData.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default RenderPostDetails;