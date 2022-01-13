import React from "react";
import CountryContainer from "../containers/CountryContainer";

const CountryDetail = ({country}) => {
    return (

        <div>
            <h3>{country.name}</h3>
            <p>{country.population}</p>
        </div>
    )
}

export default CountryDetail