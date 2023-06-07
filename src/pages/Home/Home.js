import useAuthContext from '../../hooks/useAuthContext'

//Styles
import styles from './Home.module.css'

//Components
import TransactionForm from './TransactonForm'
import TransactionList from './TransactionList'

export default function Home(){
    const { user } = useAuthContext()
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <TransactionList />
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid}/>
            </div>
        </div>
    )
}