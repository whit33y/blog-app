import { useNavigate } from 'react-router'
import { useAuth } from '../context/Auth'
import { useMutation } from 'react-query'
import { createPost } from '../hooks/useCreatePost'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function RenderAddPost() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const { mutate, isLoading } = useMutation(createPost)

  const formSchema = yup
    .object({
      title: yup.string().min(4, 'Title is too short').required('Title is required'),
      image: yup.string().url('Image must be an url').required('Image url is required'),
      description: yup
        .string()
        .min(50, 'Description is too short')
        .required('Description is required'),
      category: yup
        .string()
        .oneOf(['it', 'tech', 'health', 'lifestyle'], 'Wrong category')
        .required('Category is required'),
    })
    .required()

  type FormData = yup.InferType<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(formSchema) })
  const onSubmit = handleSubmit((data: FormData) => mutate(data))

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center mx-40'>
      <div>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
      <form className='flex flex-col justify-center' onSubmit={onSubmit}>
        <label htmlFor='title'>Title</label>
        <input type='text' className='border-2' {...register('title')} />
        <p className='text-red-500'>{errors.title?.message}</p>
        <br />
        <label htmlFor='image'>Image</label>
        <input type='text' className='border-2' {...register('image')} />
        <p className='text-red-500'>{errors.image?.message}</p>
        <br />
        <label htmlFor='textCont'>Text content</label>
        <textarea rows={3} className='border-2' {...register('description')} />
        <p className='text-red-500'>{errors.description?.message}</p>
        <br />
        <label htmlFor='category'>Category</label>
        <select className='border-2' {...register('category')}>
          <option>it</option>
          <option>tech</option>
          <option>lifestyle</option>
          <option>health</option>
        </select>
        <p className='text-red-500'>{errors.category?.message}</p>
        <br />
        {isLoading ? (
          <button className='border-2 border-black rounded-lg bg-emerald-400' disabled>
            {' '}
            ADDING POST WAIT{' '}
          </button>
        ) : (
          <button className='border-2 border-black rounded-lg bg-emerald-400'> Post </button>
        )}
      </form>
    </div>
  )
}
export { RenderAddPost }
