import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [nombrePersonaje, setNombrePersonaje] = useState("")

  return (
    <div className="m-0 d-flex justify-content-center alig-items-center flex-column">
      <h1 className="text-center my-2 text-success fw-bold display-2">API REACT: RICK MORTY</h1>
      <Formulario setNombrePersonaje={setNombrePersonaje}/>
      <PintarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  );
}

export default App;
