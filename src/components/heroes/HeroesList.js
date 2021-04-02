import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import HeroCard from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

const HeroesList = ({publisher}) => {

    const heroes = useMemo(() =>  getHeroesByPublisher(publisher), [publisher]);

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

HeroesList.propTypes = {
    
    publisher: PropTypes.string.isRequired

}

export default HeroesList

