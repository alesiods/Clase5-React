import React, { useRef } from 'react'

const UtilizamosUseRef = () => {

    const cantidadCarrito = useRef(0)

    const agregarAlCarrito = () => {
        cantidadCarrito.current = cantidadCarrito.current + 1
        console.log(cantidadCarrito.current)
    }


  return (

    <div>
        <p>Productos Marolio en el carrito: {cantidadCarrito.current}</p>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        
    </div>
  )
}

export default UtilizamosUseRef

