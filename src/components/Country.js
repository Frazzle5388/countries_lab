import React from "react";
import CountryContainer from "../containers/CountryContainer";


const Country = ({country, onCountryClick}) => {

    const handleClick = function () {
        onCountryClick(country);
    }

    return <li onClick={handleClick}>{country.name} {country.population} <img src={country.flag} alt={`Flag of ${country.name}`}></img></li>
}

export default Country;
