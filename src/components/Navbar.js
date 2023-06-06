import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li className={styles.title}> myMoney</li>
                <li> <Link to='/'>Login</Link> </li>
                <li> <Link to='/signup'>Signup</Link> </li>
            </ul>
        </div>
    )
}