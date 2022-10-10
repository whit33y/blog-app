import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

function Signup() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const { signUp } = useAuth()

    const navigate = useNavigate()


    async function handleSubmit(e: any) {
        e.preventDefault()
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        const { error } = await signUp({ email, password })
        if (error) {
            alert('error signing in')
        } else {
            navigate('/')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-email">Email</label>
                <input id="input-email" type="email" ref={emailRef} />

                <label htmlFor="input-password">Password</label>
                <input id="input-password" type="password" ref={passwordRef} />

                <br />

                <button type="submit">Sign up</button>
            </form>
        </>
    )
}
export { Signup }