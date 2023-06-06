//Styles
import useLogin from '../../hooks/useLogin'
import styles from './Login.module.css'

import { useState } from 'react'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, isPending, login} = useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await login(email, password)
        setEmail('')
        setPassword('')
    }
    return(
        <form className={styles['login-form']} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input 
                    type='email' 
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                    required>

                </input>
            </label>
            <label>
                <span>Password:</span>
                <input 
                    type='password'
                    onChange={(e) => {setPassword(e.target.value)}} 
                    value={password}
                    required>
                </input>
            </label>
            {error && <p className='error'> { error } </p>}
            {isPending && <button className="btn" disabled>loading</button>}
            {!isPending && <button className="btn" type='submit'>login</button>}
        </form>
    )
}