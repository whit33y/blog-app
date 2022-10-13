import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from 'react-router';
import { useAuth } from '../context/Auth';
import { useCreatePost } from "../hooks/useCreatePost";

function RenderAddPost() {
    const create = useCreatePost()
    console.log(useCreatePost)
    const [post, setPost] = useState({ title: '', description: '', image: '', category: 'it' });
    const [isAdded, setIsAdded] = useState(false);
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const { title, description, image, category } = post;
    async function handleSignOut() {
        await signOut()
        navigate('/')
    }
    async function createPost() {
        await supabase
            .from('posts')
            .insert([{ title, description, image, category }])
            .single()
        setPost({ title: '', description: '', image: '', category: '' })
        setIsAdded(true)
    }
    return (
        <div className="flex flex-col justify-center mx-40">
            <div>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' className="border-2"
                value={title}
                onChange={e => setPost({ ...post, title: e.target.value })} />

            <br />
            <label htmlFor='image'>Image</label>
            <input type='text' name='image' className="border-2"
                value={image}
                onChange={e => setPost({ ...post, image: e.target.value })} />
            <br />
            <label htmlFor='textCont'>Text content</label>
            <textarea name='textCont' rows={3} className="border-2"
                value={description}
                onChange={e => setPost({ ...post, description: e.target.value })}
            />
            <br />
            <label htmlFor='category'>Category</label>
            <select className="border-2"
                value={category}
                onChange={e => setPost({ ...post, category: e.target.value })}>
                <option>it</option>
                <option>tech</option>
                <option>lifestyle</option>
                <option>health</option>
            </select>
            <br />
            <button className="border-2 border-black rounded-lg bg-emerald-400" onClick={createPost}> Post </button>
            {isAdded ? <p className="text-2xl text-green-500">Post added</p> : <p className="text-2xl text-red-500">Post not added</p>}
        </div>
    );
}
export { RenderAddPost };