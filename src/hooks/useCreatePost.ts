import { useState } from "react";
import { supabase } from "../client";

function useCreatePost(){
    const [post, setPost] = useState({ title: '', description: '', image: '', category: 'it' });
    const [isAdded, setIsAdded] = useState(false);
    const { title, description, image, category } = post;
        async function createPost() {
            await supabase
                .from('posts')
                .insert([{ title, description, image, category }])
                .single()
            setPost({ title: '', description: '', image: '', category: '' })
            setIsAdded(true)
        }
    return {isAdded, post}
}
export {useCreatePost}