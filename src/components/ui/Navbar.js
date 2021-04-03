import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);

    const history= useHistory();

    const handleLogout = () => {

        history.replace('/HeroesApp/login');
        
        dispatch({
            type: types.logout
        });
       
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/HeroesApp"
                >
                    Heroes
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/HeroesApp/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/HeroesApp/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/HeroesApp/search"
                        >
                            Search
                        </NavLink>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav ml-auto">
                            <span className="nav-item nav-link text-info">
                                {name}
                            </span>
                            <button
                                className="btn nav-item nav-link"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>


            </div>

        </nav>
    )
}