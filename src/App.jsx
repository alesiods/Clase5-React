import Articulos from "./component/Articulos"
import Categorias from "./component/Categorias"
import Contador from "./component/Contador"
import UtilizamosUseRef from "./component/UtilizamosUseRef"


function App() {

  return (
     <>
    {/* <Articulos img="http://placekitten.com/200/300" titulo="Articulo 1"/>
    <br />
    <Articulos img="http://placekitten.com/200/200" titulo="Articulo 2">
      <h3>children</h3>
    </Articulos>
    <Articulos img="http://placekitten.com/200/400" titulo="Articulo 3" >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

    </Articulos> */}
   {/* <Contador stock={10} inicial={1} /> */}
   {/* <Contador stock={15} inicial={2} /> */}

   {/* <Categorias /> */}
   <UtilizamosUseRef />
    </>
  )
}

export default App
