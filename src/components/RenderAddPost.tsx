import { useNavigate } from 'react-router';
import { useAuth } from '../context/Auth';
import { useMutation } from "react-query";
import { createPost } from "../hooks/useCreatePost";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function RenderAddPost() {
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const { mutate, isLoading } = useMutation(createPost)
    const schema = yup.object({
        title: yup.string().required().min(4),
        image: yup.string().required().min(5),
        description: yup.string().required().min(50),
        category: yup.string().required(),
    }).required();
    type FormData = {
        title: string;
        description: string;
        image: string;
        category: string;
    }
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })
    const onSubmit = handleSubmit((data: FormData) => mutate(data))
    async function handleSignOut() {
        await signOut()
        navigate('/')
    }

    return (
        <div className="flex flex-col justify-center mx-40">
            <div>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
            <form className='flex flex-col justify-center' onSubmit={onSubmit} >
                <label htmlFor='title'>Title</label>
                <input type='text' className="border-2"
                    {...register('title')} />
                <br />
                <label htmlFor='image'>Image</label>
                <input type='text' className="border-2"
                    {...register('image')} />
                <br />
                <label htmlFor='textCont'>Text content</label>
                <textarea rows={3} className="border-2"
                    {...register('description')}
                />
                <br />
                <label htmlFor='category'>Category</label>
                <select className="border-2"
                    {...register('category')}>
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