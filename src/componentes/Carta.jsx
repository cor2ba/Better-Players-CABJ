import React from 'react';
import a from '../Carta.module.css'
export default function Carta(props){
    return(
    
        <div className={a.contenedor}>              
                <img className={a.img} src={`${props.img}`}></img>
                <h4 className={a.titulo}>NAME:</h4>
                <p className={a.text}>{props.name}</p>
                <h4 className={a.titulo}>POSITION:</h4>
                <p className={a.text}>{props.position}</p>
                <h4 className={a.titulo}>FIRST CLUB:</h4>
                <p className={a.text}>{props.c}</p>      
        </div>
    )
};
