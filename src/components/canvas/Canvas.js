
import React, {useEffect} from 'react'
import styles from './Canvas.module.css'
export default function Canvas(props) {
    let percentage= props.percentage;
    const drawArc= ()=>{
        let c=document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(30,26, 15, 0, 0.02* Math.PI*percentage);
        ctx.lineWidth=3;
        ctx.strokeStyle = "green";
        ctx.stroke();
        
    }

useEffect(()=>drawArc());
  

    return (
        
            <canvas id='myCanvas' width={"60"} height={"50"} ></canvas>
        
    )
}
