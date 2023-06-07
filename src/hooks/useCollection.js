import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export default function useCollection (collection, _query, _orderby){
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const query = useRef(_query).current
    const orderBy = useRef(_orderby).current

    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        if(query)
            ref = ref.where(...query)
        if(orderBy)
            ref = ref.orderBy(...orderBy)

        const unsub = ref.onSnapshot(snapshot => {
            let result = []
            snapshot.docs.forEach(doc => {
                result.push({...doc.data(), id: doc.id})
            })

            setDocuments(result)
            setError(null)
        }, (error) => {
            console.log(error.message)
            setError('Couldnt Fetch Data')
        })

        //Cleanup function
        return () => unsub()

    }, [collection, query, orderBy])

    return { documents, error }
}