import { supabase } from "../client";
import { Post } from '../types/PostTypes'

type PostInsert = Omit<Post, "id">

export const createPost = async ({ title, description, image, category }: PostInsert) => {
    const data = await supabase
        .from<PostInsert>('posts')
        .insert([{ title, description, image, category }])
        .single()

    return data
}

async function useCreatePost() {

}
export { useCreatePost }