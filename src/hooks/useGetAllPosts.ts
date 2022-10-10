import { useEffect, useState } from "react";
import { supabase } from "../client";
interface Post {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
}

function useGetAllPosts() {
    const [post, setPost] = useState<Post[] | null>(null)
    useEffect(() => {
    fetchPost()
}, [])
async function fetchPost() {
    const { data } = await supabase
        .from<Post>('posts')
        .select()
    setPost(data)
    console.log('data: ', data)
}
    return (post);
}

export  {useGetAllPosts};