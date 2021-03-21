import React,{useState} from 'react';
import AspectRatioTwoToneIcon from '@material-ui/icons/AspectRatioTwoTone';

import styles from './Image.module.css';
import posterimage from '../../assets/posterimage.jpg';
import Modal from '../modal/Modal';
export default function Image() {
    let [hover,setHover]=useState(true);
    let [close, setClose]=useState(true);

    return (
        <div>
            <div className={styles.posterWrapper}>
                <div className={styles.poster}>
                    <div className={styles.imageWrapper} >
                        <img className={styles.img} src={posterimage} onMouseOver={()=>setHover(false) } ></img>
                    </div>
                    <div className={!hover?styles.zoom:styles.removeZoom} 
                    onMouseOut={()=>setHover(true)}
                    >
                        <a className={styles.aTag}href='#'
                        onClick={()=>setClose(false)}
                        ><AspectRatioTwoToneIcon />
                            Expand</a>
                    </div>
                </div>
               { close ? null: <Modal  close={setClose}/> }
                <div className={styles.ott}>

                </div>
            </div>
        </div>
    )
}
