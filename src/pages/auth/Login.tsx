import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const { signIn } = useAuth()

  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const { error } = await signIn({ email, password })
    if (error) {
      alert('error signing in')
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='input-email'>Email</label>
        <input
          id='input-email'
          type='email'
          ref={emailRef}
          className='border-2 border-black mb-2'
        />
        <br />
        <label htmlFor='input-password'>Password</label>
        <input
          id='input-password'
          type='password'
          ref={passwordRef}
          className='border-2 border-black'
        />

        <br />

        <button type='submit' className='border-2 border-black'>
          Login
        </button>
      </form>
    </>
  )
}
export { Login }
