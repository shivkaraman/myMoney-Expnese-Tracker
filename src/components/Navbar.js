import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'

export default function Navbar(){
    const { user } = useAuthContext()
    return(
        <div className={styles.navbar}>
            <ul>
                <li className={styles.title}> myMoney</li>
                {!user && (
                    <>
                        <li> <Link to='/'>Login</Link> </li>
                        <li> <Link to='/signup'>Signup</Link> </li>
                    </>
                )}
                { user && (
                    <>
                        <li>hello, {user.displayName}</li>
                        <li>
                        <button className="btn" >Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}