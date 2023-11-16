import Planets from "../../data/planets"
function PlanetCard() {
    return(
        <>
        {Planets.map((planet) => (
        <div key={planet.name}> 
           <p>{planet.name}</p>
           <img src={planet.image} alt={planet.name} />
        </div>
        ))
         }
        </>
    )
}

export default PlanetCard