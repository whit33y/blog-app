import { useEffect, useState } from "react"
import { supabase } from "../client"
interface Post {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
}

type PostType = Post[];

function useGetPosts(category:string|undefined) {
    const [post, setPost] = useState<PostType | null>(null)
    useEffect(() => {
    if (!category) return
    fetchPost(category)
}, [])
async function fetchPost(category: string) {
    const { data } = await supabase
        .from<Post>('posts')
        .select()
        .eq('category', category!)
    setPost(data)
    console.log('data: ', data)
}
    return (post);
}

export  {useGetPosts};