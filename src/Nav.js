import React from "react";
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <NavLink to="/" exact>Начало</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/list">Список тем</NavLink>
        </nav>
    )
}
