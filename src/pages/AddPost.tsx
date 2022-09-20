import { useState, useEffect } from "react";
import { supabase } from "../client";
import Boilerplate from "../layouts/Boilerplate";


function AddPost() {
    const [posts, setPosts] = useState<any>([])
    const [post, setPost] = useState({ title: '', description: '', image: '', category: '' })
    const { title, description, image, category } = post
    useEffect(() => {
        fetchPosts()
    }, [])
    async function fetchPosts() {
        const { data } = await supabase
            .from('posts')
            .select()
        setPosts(data)
        console.log('data: ', data)
    }
    async function createPost() {
        await supabase
            .from('posts')
            .insert([{ title, description, image, category }])
            .single()
        setPost({ title: '', description: '', image: '', category: '' })
        fetchPosts()
    }
    return (
        <Boilerplate name={'Add post'}>
            {/* <form className="flex flex-col justify-center mx-20"> */}
            <p>Title</p>
            <input type='text' name='title' className="border-2"
                value={title}
                onChange={e => setPost({ ...post, title: e.target.value })} />
            <br />
            <p>Image</p>
            <input type='text' name='image' className="border-2"
                value={post.image}
                onChange={e => setPost({ ...post, image: e.target.value })} />
            <br />
            <p>Text content</p>
            <textarea name='textCont' rows={3} className="border-2"
                value={description}
                onChange={e => setPost({ ...post, description: e.target.value })}
            />
            <br />
            <p>Category</p>
            <select className="border-2"
                value={post.category}
                onChange={e => setPost({ ...post, category: e.target.value })}>
                <option>it</option>
                <option>tech</option>
                <option>lifestyle</option>
                <option>health</option>
            </select>
            {/* <br />
                <p>Date</p>
                <input type="date" className="border-2"
                    value={post.created_in}
                    onChange={e => setPost({ ...post, created_in: e.target.value })} /> */}
            <br />
            <button className="border-2 border-black rounded-lg bg-emerald-400" onClick={createPost}> Post </button>
            {/* </form> */}
        </ Boilerplate>
    );
}

export default AddPost;
