import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {



    return (
        <div className="col" >
            <div className="card">
                <img src={`/HeroesApp/assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text"><strong>Alter Ego:</strong> {alter_ego}</p>
                    <p className="card-text"><strong>Characters:</strong>  { (characters.length>35)? (characters.slice(0,35))+'...':(characters)} </p> 
                    
                    <Link to={`/HeroesApp/hero/${id}`}>
                        Más..
                    </Link>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><strong>Firt Appearance:</strong> {first_appearance}</small>
                </div>
            </div>
        </div>

    )
}

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired
}

export default HeroCard
