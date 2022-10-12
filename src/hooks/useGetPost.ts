import { useEffect, useState } from "react";
import { supabase } from "../client";
import {Post} from '../types/PostTypes'

function useGetPost(id:string|undefined) {
    const [post, setPost] = useState<Post | null>(null)
    useEffect(() => {
    if (!id) return
    fetchPost(id)
}, [id])
async function fetchPost(id: string) {
    const { data } = await supabase
        .from<Post>('posts')
        .select()
        .eq('id', id!).single()
    setPost(data)
}
    return (post);
}

export {useGetPost};
