import { heroes } from "../components/data/heores";


export const getHeroesById = (id) => {
    return heroes.find( hero => hero.id === id);

}
