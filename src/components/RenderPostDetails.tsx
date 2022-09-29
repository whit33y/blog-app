import { useState, useEffect } from 'react'
import { supabase } from '../client';
import { useParams } from "react-router-dom";
import { useGetPost } from '../hooks/useGetPost';

function RenderPostDetails() {
    const { id } = useParams();
    console.log(id)
    const post = useGetPost(id)
    if (!post) return <div>nothing</div>;
    return (
        <div className='bg-slate-200 '>

            <div className='flex flex-col mx-60 p-2  border-slate-400 bg-slate-200	'>
                <img className='object-scale-down h-80 w-auto bg-slate-200' src={post.image} />
                <div className='ml-20 mr-20'>
                    <h1 className='text-3xl mb-2'>{post.title}<span className="text-lg text-neutral-800"><br />Category: {post.category}</span></h1>
                    <p className='text-lg text-justify font-medium tracking-widest mb-4'>{post.description}</p>
                    <a href='../' className="border-2 border-black mb-3 px-10 py-1 bg-emerald-400">Back</a>
                </div>
            </div>
            ))
        </div>
    );
}

export { RenderPostDetails };