import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";
import Personaje from "./Personaje";



const PintarDatos = ({nombrePersonaje}) => {

  
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagina, setPagina] = useState(1);

  const prevPage = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
      
    }
};

  const nextPage = () => {
    if (pagina < 42) {
      setPagina(pagina + 1);
    }
  }

  useEffect(() => {
    
    consumirApi(nombrePersonaje);
    
    // aca vamos a dejar un array vacio para que este use effect se ejecute solo una vez, si ponemos argunmentos se ejecutan una vez por renderizado
  }, [nombrePersonaje, pagina]);

  const consumirApi = async (nombre) => {

    setLoading(true);

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nombre}&status=`);
      

      if (!res.ok) {
          Swal.fire({
            icon: 'error',
            title: 'Se produjo un error, lo que buscas no existe.',
            footer: '<a href="">¿Deseas volver al inicio?</a>',
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
          })
        
      }
      const datos = await res.json();

      setPersonajes(datos.results);
      

    } catch (error) {
        console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-4">
          <button className="btn btn-warning text-dark m-1" onClick={prevPage}>Anterior</button>
           <button className="btn btn-warning text-dark m-1" onClick={nextPage}>Siguiente</button>
      </div>
      <div className="m-0 d-flex flex-wrap justify-content-center align-items-center">
          {
            personajes.map(item => (
              <Personaje key={item.id} personaje={item} />
            ))
          }
      </div>
      
    </>
  )
}

export default PintarDatos