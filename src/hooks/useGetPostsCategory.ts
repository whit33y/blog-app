import { useEffect, useState } from "react";
import { supabase } from "../client";
import {Post} from '../types/PostTypes'


function useGetPostsCategory(category:string|undefined) {
    const [post, setPost] = useState<Post[] | null>(null)
    useEffect(() => {
    if (!category) return
    fetchPost(category)
}, [category])
async function fetchPost(category: string) {
    const { data } = await supabase
        .from<Post>('posts')
        .select()
        .eq('category', category!)
    setPost(data)
}
    return (post);
}

export  {useGetPostsCategory};