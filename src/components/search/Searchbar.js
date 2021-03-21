import React, {useState} from 'react'
import styles from './Searchbar.module.css';

export default function Searchbar() {

    return (
    <div className={styles.searchBackground}>
        <div className={styles.search}>
            <div className={styles.title}>
                <h2>Welcome to Movie world</h2>
                <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
            </div>
            <div className={styles.searchWrapper}>
                <form className={styles.searchField}>
                    <label>
                        <input className={styles.searchInput} type="text" placeholder='Search for a movie, tv show, person......'></input>
                    </label>
                    <input  className={styles.searchButton} type="submit" value="search"></input>
                </form>
            </div>
        </div>
    </div>    
    )
}
