import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroScreen = ({history}) => {

    const {heroId} = useParams();

    const hero = useMemo(() =>   getHeroesById(heroId), [heroId]);

    if(!hero){
        return <Redirect to='/'/> ;
    }

    const handleReturn = () => {

        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="row mt-5">
            <h1>{superhero}</h1>
            <div className="col-12 col-md-4">
                <img 
                    src={`/../../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-12 col-md-8 animate__animated animate__fadeIn">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>

                <br></br>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
