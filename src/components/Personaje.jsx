
const Personaje = ({personaje}) => {

    const {name, species, image} = personaje

  return (
    <div className="d-flex justify-content-center align-items-center m-2 flex-wrap">
        <div className="card">
            <img src={image} alt="" className="card-img-top" />
            <div className="card-body">
                <h5>{name}</h5>
                <p>{species}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Personaje