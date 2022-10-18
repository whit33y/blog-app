import { supabase } from "../client";
import { Post } from '../types/PostTypes'

async function useGetPostByCategory(category: string) {
    const { data } = await supabase
        .from<Post>('posts')
        .select()
        .eq('category', category)
    return data
}

export { useGetPostByCategory };