import { countryType } from "./countryType"

interface CountryOptionsProps {
    inputValue: string;
    countriesList : countryType[];
    setFunction: React.Dispatch<React.SetStateAction<any>>;
}
export const CountryOptions : React.FC<CountryOptionsProps>= ({inputValue, countriesList, setFunction}) => {

    const filterCountriesList = countriesList
    .filter((country : countryType) => {
        return country.name.common.toLowerCase().includes(inputValue)
    })

    const displayCountryOptions = () => {
        if(!inputValue) {
            return("")
        }
        if(filterCountriesList.length > 15) {
            return(<h1 className="text-center">too many matches</h1>)
        }

        const countriesMatchesList = filterCountriesList.map((country : countryType)=> {
            return (
                <li className="flex" key={country.name.common}>
                    <div onClick={() => setFunction(country)} className="flex gap-4 items-center cursor-pointer">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <p>{country.name.common}</p>
                    </div>
                </li>
            )
        })
        return countriesMatchesList
    }

    return(
        <ol className="w-full flex flex-col gap-1">
            {
                displayCountryOptions()
            }
        </ol>
    )
}