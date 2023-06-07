import { projectFirestore, timeStamp } from '../firebase/config'
import { useEffect, useReducer, useState } from 'react'

const initialState = {
    document: null,
    error: null,
    isPending: false,
    success: false
}

function firestoreRecucer(state, action){
    console.log(action.type)
    switch(action.type){
        case 'ADD_DOCUMENT':
            return { document: action.payload, error: null, isPending: false, success: true}
        case 'DELETE_DOCUMENT':
            return { document: null, error: null, isPending: false, success: true}
        case 'IS_PENDING':   
            return {  document: null, error: null, isPending: true, success: false  }
        case 'ERROR':   
            return { document: null, error: action.payload, isPending: false, success: false }
        default:
            return state
    }
}

export default function useFirestore(collection){
    const [state, dispatch] = useReducer(firestoreRecucer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = projectFirestore.collection(collection)

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action)
        }
    }

    //add a document
    const addDocument = async (document) => {
        dispatch( {type: 'IS_PENDING'})
        try{
            const createdAt = timeStamp.fromDate(new Date())
            const addedDoc = await  ref.add( {...document, createdAt})
            dispatchIfNotCancelled( {type: 'ADD_DOCUMENT', payload: addedDoc} )
        }
        catch(err){
            dispatchIfNotCancelled( {type: 'ERROR', payload: err.message} )
            console.log(err.message)
        }
    }

    //Delete a document
    const deleteDocument = async (id) => {
        dispatch( {type: 'IS_PENDING'})
        try{
            await ref.doc(id).delete()
            dispatchIfNotCancelled( {type: 'DELETE_DOCUMENT'})
        }
        catch(err){
            dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
            console.log(err.message)
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { state, addDocument, deleteDocument }
}