import { useState,useEffect } from 'react'
import { projectAuth } from '../firebase/config.js'
import useAuthContext from '../hooks/useAuthContext.js'

export default function useSignup(){
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
	const [isCancelled, setIsCancelled] = useState(false)
	const { dispatch } = useAuthContext()

    const logout = async () => {
        setIsPending(true)
        setError(null)

        try{
            await projectAuth.signOut()

            dispatch( {type: 'LOGOUT'} )

			if(!isCancelled){
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

    return { isPending, error, logout}
}