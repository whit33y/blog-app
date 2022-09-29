import { useEffect, useState } from "react"
import { supabase } from "../client"
interface Post {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
}
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
    console.log('data: ', data)
}
    return (post);
}

export {useGetPost};
