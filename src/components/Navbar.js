import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext'

export default function Navbar(){
    const { user } = useAuthContext()
    const { logout } = useLogout()
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
                        <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}