import { useEffect, useState } from "react";
import { supabase } from "../client";
import {Post} from '../types/PostTypes'

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
}
    return (post);
}

export  {useGetAllPosts};