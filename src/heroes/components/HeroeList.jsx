import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react";

export const HeroeList = ({ publisher }) => {
    //si es un publisher que existe en la data, la constante heroes seria un arreglo de objetos filtrado por publisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
     {
     heroes.map(hero => 
        <HeroCard key={hero.id}
        {...hero}
        />)
     }
    </div>
    )
}
