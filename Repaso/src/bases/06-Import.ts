import { heroes, type Owner } from "../data/heroes-tarea.data";
import { heroes as heroesFav, type Hero} from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroesFav.find( (hero) =>{
        return hero.id === id
    });

//    if (!hero){
//        throw new Error('No existe un héroe con ese id');
//    }
    return hero
};

//console.log(getHeroById(1));

//-------------------------------------------------------

/*Tarea
    getHeroesByOwner => Hero[]
    Filtra heroes por su propietario
    @param Owner - el propietario por el cual filtrar (DC - Marvel)
    @returns Array de heroes pertenecientes al propietario

    console.log(getHeroesByOwner(Owner.Marvel))
*/

export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter((hero) => hero.owner === owner)

    return heroesByOwner;
}

