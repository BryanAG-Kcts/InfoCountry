import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartArea, faLanguage, faDollarSign, faHashtag} from "@fortawesome/free-solid-svg-icons";
import { countryType } from "./countryType";

interface DisplayCountryProps {
    country : countryType | any;
}

export const DisplayCountryInfo : React.FC<DisplayCountryProps> = ({country}) => {
    
    if(!country) {
        return("")
    }else {
        console.log(country.languages)
    }

    return(
        <div className="w-full">
            <ol className="flex flex-col gap-3">
                <li className="text-4xl font-semibold text-blue-400">{country.name.common}</li>
                <li className="text-gray-400">{country.name.official}</li>
                <li className="text-xl">{country.capital}</li>

                <li >
                    <ol className="max-h-56 overflow-y-auto">
                        {
                            country.idd.suffixes.map((countrySuffix: number) => {
                                return(
                                    <li className="flex gap-4 items-center" key={countrySuffix}>
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
                            Object.keys(country.currencies).map(countryCurrency => {
                                return(
                                    <li className="flex gap-4 items-center" key={countryCurrency}>
                                        {countryCurrency}
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </li>

                <li>
                    <ol>
                        {
                            Object.values(country.languages).map((countryLanguage: any) => {
                                return(
                                    <li className="flex gap-4 items-center" key={countryLanguage}>
                                        {countryLanguage}
                                        <FontAwesomeIcon icon={faLanguage} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </li>

                <li className="flex gap-4 items-center">
                    {new Intl.NumberFormat().format(country.area)} km²
                    <FontAwesomeIcon icon={faChartArea} />
                </li>

                <li className="flex gap-4 items-center">
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