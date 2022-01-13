import React, { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import CountryDetail from "../components/CountryDetail";

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect (() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    return (
        <>
        <CountriesList countries={countries}/>
        {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
        </>
    )
    
}

export default CountryContainer;