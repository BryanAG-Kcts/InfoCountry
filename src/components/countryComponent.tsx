import { useState, useEffect } from "react"
import { FormCountry } from "./formComponent"
import { CountryOptions } from "./countryOptions"
import { DisplayCountryInfo } from "./countryInfoComponent"

export const CountryComponent = () => {

    const [countriesList, setCountriesList] = useState([])
    const [countryInput, setCountryInput] = useState("")
    const [countrySelected, setCountrySelected] = useState("")

    function setInputValue(inputValue : string): void {
        setCountryInput(inputValue)
    }

    function changeSelectCountry(country) {
        setCountrySelected(country)
    }

    useEffect(() => {
        if(!countryInput) {
            setCountrySelected("")
        }
    }, [countryInput])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(ans => ans.json())
        .then(ansJson => setCountriesList(ansJson))
    }, [])

    return(
        <>
            <FormCountry inputValue = {countryInput} setFunction = {setInputValue}/>
            <CountryOptions inputValue = {countryInput} countriesList = {countriesList} setFunction = {changeSelectCountry}/>
            <DisplayCountryInfo country = {countrySelected}/>
        </>
    )

}