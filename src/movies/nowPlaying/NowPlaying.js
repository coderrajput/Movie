import React from 'react'
import Card from "../../components/cards/Card";
import styles from './NowPlaying.module.css';

export default function NowPlaying() {
    return (
        <div className={styles.popular}>
            
            < Card key={1}/>
            < Card key={2}/>
            < Card />
            < Card />
            < Card />
            < Card />
            < Card />
            < Card />
            < Card />
            < Card />
        </div>
    )
}
