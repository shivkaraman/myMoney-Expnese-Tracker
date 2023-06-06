//Styles
import styles from './Login.module.css'

import { useState } from 'react'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
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
            <button className="btn" type='submit'>login</button>
        </form>
    )
}