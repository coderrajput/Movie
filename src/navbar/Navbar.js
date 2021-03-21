import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.ul}>
                <li className={styles.li}> 
                    <Link style={{textDecoration:'none', color:'#fff'}} to="/movies">Movies</Link>
                </li>

                <li className={styles.li}> 
                    <Link style={{textDecoration:'none', color:'#fff'}} to="/tvshow">Tv Shows</Link>
                </li>
            </ul>
        </div>
    )
}
