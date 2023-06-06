import { createContext, useReducer } from "react";

export const AuthContext = createContext()

export const AuthReducer = (state, action) => {
    switch (state) {
        case 'LOGIN' :
            return {...state, user:action.payload}
        case 'LOGOUT' :
            return {...state, user: null}
        default:
            return state
    }
}

export const AuthContextProvider =  ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null
    })

    return (
        <AuthContextProvider value={{...state, dispatch}}>
            {children}
        </AuthContextProvider>  
    )
} 