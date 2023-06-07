import { useEffect, useState } from 'react'
import useFirestore from '../../hooks/useFirestore.js'


export default function TransactionForm( {uid} ){
    const [name, setName] = useState('')
    const [transaction, setTransaction] = useState('')
    const { state, addDocument } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({ uid, name, transaction })
    }

    useEffect(() => {
        if(state.success){
            setName('')
            setTransaction('')
        }
    }, [state])

    return(
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction Name</span>
                    <input 
                        type="text"
                        onChange={(e) => {setName(e.target.value)}}
                        value={name}
                        required
                    />
                </label>
                <label>
                    <span>Amount (Rs)</span>
                    <input
                        type="number"
                        onChange={(e) => {setTransaction(e.target.value)}}
                        value={transaction}
                        required
                    />
                </label>
                <button className='btn'>Add Transaction</button>
            </form>
        </>
    )
}