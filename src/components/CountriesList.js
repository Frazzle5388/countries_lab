import React from "react";
import Country from "./Country";

const CountriesList = ({countries}) => {

    const countriesItems = countries.map((country, index) => {
        return <Country country = {country} key={index}/>

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