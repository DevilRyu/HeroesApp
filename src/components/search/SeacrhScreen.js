import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SeacrhScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const initialForm = {
        searchText: q
    };

    const [formValues, handleInputChange] = useForm(initialForm);

    const { searchText } = formValues;

    //solo si quiero busquedas con enter y el boton
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    //const heroesFiltered = getHeroesByName(searchText);

    const handleSearch = (e) => {

        e.preventDefault();
        history.push(`?q=${searchText}`);

    }

    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn mt-2 w-100 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-12 col-md-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '') 
                            &&
                        < div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0) 
                            &&
                        < div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
