import React from 'react'
import { useState, useEffect } from 'react'

//El efecto primario de React es rederizar componenes, peeeeero una aplicacion debe realizar otras operaciones ademas de motrarse, por ejemplo: consumir datos de un servidor, usar evetos, etc.

//Vamos a trabajar con useEffect que me permite controlar los efectos SECUNDARIOS provocados por el cambio de estado.
//El useEffect recibe dos parametros: funcion que se va a ejecutar y un arreglo de dependecias.

const Contador = ({stock, inicial}) => {

    const [contador, setContador] = useState(inicial)
    const [color, setColor] = useState("black")

    useEffect (() => {
        /* document.title= `Contador ${contador}` */

        //js vanilla
        /* if(contador === 5){
            document.getElementById('boton').style.color = 'red'
        } */
        if(contador >= 5) {
            setColor("red")
        }
        else {
            setColor("black")
        }
    }, [contador])



    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1)
        }
    }


  return (

    <div>
        <h2>Mi contador:</h2>

        <button onClick={decrementar}> - </button>
        <strong>{contador}</strong>
        <button onClick={incrementar}> + </button>


        {/* <button id='boton'> Agregar al carrito</button> */}
        <button style={{color: color}}> Agregar al carrito</button>

    </div>

  )
}

export default Contador