import React from "react";
import Country from "./Country";

const CountriesList = ({countries, onCountryClick}) => {

    const countriesItems = countries.map((country, index) => {
        return <Country country = {country} key={index} onCountryClick={onCountryClick}/>

    })

    return (
        <div>
            <ul>
                {countriesItems}
            </ul>
        </div>
    )
    
}

export default CountriesList;