import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.js'

export default function useAuthContext(){
    const context = useContext(AuthContext)

    if(!context){
        throw new Error ("useAuthContext must be inside the scope of AuthContextProvider")
    }

    return context
}