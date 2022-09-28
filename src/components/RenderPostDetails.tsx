import { useState, useEffect } from 'react'
import { supabase } from '../client';
import { useParams } from "react-router-dom";

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
        <div className='bg-slate-200 '>
            {
                post.map((postData: any) => (
                    <div className='flex flex-col mx-60 p-2  border-slate-400 bg-slate-200	'>
                        <img className='object-scale-down h-72 w-auto bg-slate-200' src={postData.image} />
                        <div>
                            <h1 className='text-3xl mb-2'>{postData.title}  <span className="text-lg text-neutral-800"><br />Category: {postData.category}</span></h1>
                            <p className='text-lg text-justify font-medium tracking-widest ml-20 mr-20'>{postData.description}</p>
                            <a href='../' className="border-2 border-black mb-3 px-2 bg-emerald-400" >Back</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default RenderPostDetails;