import { useFormulario } from "../hooks/useForm"

const Formulario = ({setNombrePersonaje}) => {

  const [inputs, handleChange, reset] = useFormulario({
      nombre: ""
  });

  const {nombre} = inputs

  const handleSubmit = e => {
    e.preventDefault();

    setNombrePersonaje(nombre.trim().toLowerCase());
    reset();
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-4">
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="nombre"
          placeholder="Ingrese personaje"
          className="form-control mb-2 w-100 border border-success"
          value={nombre}
          onChange={handleChange}
         />
         <button type="submit" className="btn btn-success text-white w-100">Buscar</button>
    </form>
    </div>
  )
}

export default Formulario