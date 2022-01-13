import React, { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect (() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    return (
        <CountriesList countries={countries}/>
    )
    
}

export default CountryContainer;