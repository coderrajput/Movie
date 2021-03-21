import React from 'react'
import styles  from  './Card.module.css';
import Canvas from '../canvas/Canvas';

export default function Card() {

    let movieDetails={imageSrc:'https://www.themoviedb.org/t/p/w220_and_h330_face/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg',
    percentage:85,
    title:'Hero Love story of the spy',
    date:'Jan 29, 2021'
}
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img className={styles.img} src={movieDetails.imageSrc}></img>
                
            </div>
            <div className={styles.ratings}>
                <div className={styles.circleBackground}></div>
                <div className={styles.percentage}>
                {`${movieDetails.percentage}%`}
                </div>
                <div className={styles.canvas}>
                    <Canvas percentage={movieDetails.percentage}/>
                </div> 
            </div>   

            <div>
                <h3>{movieDetails.title}</h3>
            </div>
            <div>
                <p>{movieDetails.date}</p>
            </div>
            
        </div>
    )
}
