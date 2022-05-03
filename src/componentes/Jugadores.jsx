import React from 'react';
import Carta from './Carta.jsx';
import b from '../Jugadores.module.css'

export default function Cartita(props){
    return(
        <div className={b.contenedor}>
            {props.jugadores.map(i =>
                <Carta
                img = {i.img.i}
                name = {i.nombre.n}
                position = {i.posicion.p}
                c = {i.club.ca}
                />
                )}
        </div>
    )
};
