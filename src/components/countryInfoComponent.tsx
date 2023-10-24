import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartArea, faLanguage, faDollarSign, faHashtag} from "@fortawesome/free-solid-svg-icons";
import { countryType } from "./countryType";

interface DisplayCountryProps {
    country : countryType | any;
}

export const DisplayCountryInfo : React.FC<DisplayCountryProps> = ({country}) => {
    
    if(!country) {
        return("")
    }

    return(
        <div className="w-full">
            <ol className="flex flex-col gap-3">
                <li className="text-4xl font-semibold text-blue-400">{country.name.common}</li>
                <li className="text-gray-400">{country.name.official}</li>
                <li className="text-xl">{country.capital}</li>

                <li >
                    <ol className="overflow-y-auto max-h-56">
                        {
                            country.idd.suffixes.map((countrySuffix: number) => {
                                return(
                                    <li className="flex items-center gap-4" key={countrySuffix}>
                                        <p>{country.idd.root}{countrySuffix}</p>
                                        <FontAwesomeIcon icon={faHashtag} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </li>

                <li>
                    <ol>
                        {
                            country.currencies ?
                            Object.keys(country.currencies || {}).map(countryCurrency => {
                                return(
                                    <li className="flex items-center gap-4" key={countryCurrency}>
                                        {countryCurrency}
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </li>
                                )
                            }) : "No currencies"
                        }
                    </ol>
                </li>

                <li>
                    <ol>
                        {
                            
                            Object.values(country.languages).map((countryLanguage: any) => {
                                return(
                                    <li className="flex items-center gap-4" key={countryLanguage}>
                                        {countryLanguage}
                                        <FontAwesomeIcon icon={faLanguage} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </li>

                <li className="flex items-center gap-4">
                    {new Intl.NumberFormat().format(country.area)} km²
                    <FontAwesomeIcon icon={faChartArea} />
                </li>

                <li className="flex items-center gap-4">
                    {new Intl.NumberFormat().format(country.population)}
                    <FontAwesomeIcon icon={faUsers} />
                </li>

                <li className="">{country.subregion}</li>

                <li className="">
                    <img className="rounded-lg" src={country.flags.svg} alt={country.name.common} />
                </li>
            </ol>
        </div>
    )
}