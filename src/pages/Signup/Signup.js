import { useEffect, useState } from 'react'
import useSignup from '../../hooks/useSignup'

//Styles
import styles from './Signup.module.css'

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { error, isPending , signup} = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    useEffect(() => {
        if(!error){
            setEmail('')
            setPassword('')
            setDisplayName('')
        }
    }, [error])
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
            {error && <p className='error'> { error } </p>}
            {isPending && <button className="btn" disabled>loading</button>}
            {!isPending && <button className="btn" type='submit'>signup</button>}
        </form>
    )
}