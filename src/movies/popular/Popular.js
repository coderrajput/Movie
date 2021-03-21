import React from 'react';
import Card from '../../components/cards/Card';
import styles from './Popular.module.css';
import {Link} from 'react-router-dom';

export default function Popular() {
    return (
        
        <div className={styles.popular}>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
            <Link style={{textDecoration:'none'}} to='/overview'>< Card /></Link>
        </div>
    )
}
