import useAuthContext from '../../hooks/useAuthContext'
import useCollection from '../../hooks/useCollection'

//Styles
import styles from './Home.module.css'

//Components
import TransactionForm from './TransactonForm'
import TransactionList from './TransactionList'

export default function Home(){
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        'transactions',
        ['uid', '==', user.uid],
        ['createdAt', 'desc']
    )
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {error && <p className='error'>{error}</p>}
                {documents && <TransactionList transactions={documents} />}
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid}/>
            </div>
        </div>
    )
}