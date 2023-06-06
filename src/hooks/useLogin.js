import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config.js'
import useAuthContext from '../hooks/useAuthContext.js'

export default function useSignup(){
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
	const [isCancelled, setIsCancelled] = useState(false)
	const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsPending(true)
        setError(null)

        try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            if(!res){
                throw new Error ('Login failed')
            }

			console.log(res.user)
            dispatch( {type: 'LOGIN', payload: res.user} )

			if(!isCancelled){
				console.log('state update')
				setIsPending(false)
				setError(null)
			}
        }
        catch(err){
			if(!isCancelled){
				setIsPending(false)
				setError(err.message)
			}
        }

		
    }
	
	useEffect(() => {
		return () => setIsCancelled(true)
	}, [])

    return { isPending, error, login }
}