import React from 'react'

const Articulos = ({titulo, img, children}) => {
  return (
    <div>
        
        <img src={img} alt={titulo} />
        <h2>{titulo}</h2>
        <button>Leer Articulo</button>
        {children}
    </div>
  )
}

export default Articulos
