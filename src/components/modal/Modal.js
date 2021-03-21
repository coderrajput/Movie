import React from 'react'
import styles from './Modal.module.css';
import sampleImg from '../../assets/posterimage.jpg'

export default function Modal(props) {
    return (
        <div className={styles.myModal}>
            <div className={styles.modalContent}>
                <div className={styles.close}
                onClick={()=>props.close(true)}
                >&times;</div>
                <div>
                    <img  src={sampleImg}></img>
                </div>
            </div>
        </div>
    )
}
