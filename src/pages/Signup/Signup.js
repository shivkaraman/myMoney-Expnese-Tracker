import { useState } from 'react'

//Styles
import styles from './Signup.module.css'

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName)
    }
    return(
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
            <h2>Signup</h2>
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
            <label>
                <span>Display Name:</span>
                <input 
                    type='text'
                    onChange={(e) => {setDisplayName(e.target.value)}} 
                    value={displayName}
                    required>
                </input>
            </label>
            <button className="btn" type='submit'>signup</button>
        </form>
    )
}