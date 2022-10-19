import { useState } from "react";
import { useNavigate } from 'react-router';
import { useAuth } from '../context/Auth';
import { useMutation } from "react-query";
import { createPost } from "../hooks/useCreatePost";




function RenderAddPost() {

    const [post, setPost] = useState({ title: '', description: '', image: '', category: 'it' });
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const { mutate, isLoading } = useMutation(createPost)

    const { title, description, image, category } = post;
    async function handleSignOut() {
        await signOut()
        navigate('/')
    }
    return (
        <div className="flex flex-col justify-center mx-40">
            <div>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
            <form className='flex flex-col justify-center' onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
                mutate({ title, description, image, category })
            }
            } >
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
                {isLoading ? <button className="border-2 border-black rounded-lg bg-emerald-400" disabled> ADDING POST WAIT </button> : <button className="border-2 border-black rounded-lg bg-emerald-400"> Post </button>}
            </form>
        </div >
    );
}
export { RenderAddPost };