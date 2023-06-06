import { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config.js'
import useAuthContext from '../hooks/useAuthContext.js'


export default function useSignup(){
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)
    const { dispatch } = useAuthContext()


    const signup = async (email, password, displayName) => {
        setIsPending(true)
        setError(null)

        try{
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if(!res){
                throw new Error ('Couldnt singup the user')
            }
            await res.user.updateProfile({displayName})

            console.log(res.user)
            dispatch( {type: 'LOGIN', payload: res.user} )

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
        return setIsCancelled(true)
    }, [])

    return { isPending, error, signup }
}