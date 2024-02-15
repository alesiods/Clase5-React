import React, { useEffect, useState } from 'react'

const Categorias = () => {

    const [categoria, setCategoria] = useState("")

    useEffect (() => {
        document.title = `Categoria ${categoria}`
    }, [categoria])

    const manejadorCategorias = (categoria) => {
        setCategoria(categoria)
    }


  return (
    <div>
        <h2>Categorias de los productos</h2>
        <button onClick={() => manejadorCategorias("Frutas")}> Frutas </button>
        <button onClick={() => manejadorCategorias("Verduras")}> Verduras </button>
        <button onClick={() => manejadorCategorias("Cereales")}> Cereales </button>
        <button onClick={() => manejadorCategorias("Lacteos")}> Lacteos </button>
    </div>
  )
}

export default Categorias