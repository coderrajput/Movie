import React,{Suspense, lazy} from 'react'
import Searchbar from '../components/search/Searchbar';
import styles from './Movies.module.css';
import Popular from './popular/Popular';
const NowPlaying=React.lazy(()=>import ('./nowPlaying/NowPlaying'));

export default function Movies() {
    return (
        <div>
            <Searchbar />
            <h3 className={styles.heading}>Popular Movies</h3>
            <Popular />    
            <h3 className={styles.heading}>Upcoming Movies</h3>
            <Suspense fallback={<div>Loading...</div>}> 
                <NowPlaying />
            </Suspense>    
        </div>
    )
}
