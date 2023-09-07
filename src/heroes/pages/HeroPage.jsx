import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  
  //el useMemo se disparara cada vez que su dependencia cambie y guardara el nuevo valor, en este caso no es tan necesario, pero en un proyecto mas grande si.
  const hero = useMemo(() => getHeroesById(id), [id] );

  const navigate = useNavigate()
 
  const onNavigateReturn = () => {
    navigate(-1) 
  }
  const heroImageUrl = `./assets/heroes/${id}.jpg`; 
  //recomendado que estas clases de condiciones esten antes de la renderizacion del componente
  if(!hero) {
    return <Navigate to="/dc" />
  }
 
  return (
    <>
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={heroImageUrl}
        alt={hero.superhero} 
        className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
     <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <b>Alter ego:</b> {hero.alter_ego}
        </li>
        <li className="list-group-item">
          <b>Publisher:</b> {hero.publisher}
        </li>
        <li className="list-group-item">
          <b>First Appereance:</b> {hero.first_appearance}
        </li>
      </ul>
      <h5 className="mt-3"> Characters </h5>
      <p>{ hero.characters }</p>
      <button 
      onClick={onNavigateReturn}
      className="btn btn-outline-primary">
        Regresar
      </button>
     </div>
    </div>
    </>
    
  )
}
