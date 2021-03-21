import React from 'react';
import Image from '../image/Image';
import styles from './OverView.module.css';

export default function OverView() {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.gradient}>
                <div className={styles.content}>
                    <Image />
                </div>
            </div>
        </div>
    )
}
