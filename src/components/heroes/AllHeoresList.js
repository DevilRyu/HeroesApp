import React, { useMemo } from 'react';
import HeroCard from './HeroCard';
import { getAllHeroes } from '../../selectors/getAllHeores';

const AllHeoresList = () => {

    const heroes = useMemo(() =>  getAllHeroes(), []);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn" >
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    >
                    </HeroCard>
                ))
            }
        </div>
    )
}

export default AllHeoresList

