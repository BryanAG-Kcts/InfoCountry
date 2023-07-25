import React, {ChangeEvent } from 'react';

interface FormCountryProps {
    inputValue: string;
    setFunction: React.Dispatch<React.SetStateAction<any>>;
}

export const FormCountry : React.FC<FormCountryProps> = ({inputValue, setFunction}) =>{ 

    function changeValueInput(e : ChangeEvent<HTMLInputElement>) {
        let lowerInputValue = e.target.value.toLowerCase()
        setFunction(lowerInputValue)
    }

    return(
        <form className="">
            <input onChange={changeValueInput} className=" bg-transparent text-center outline-none px-3 py-2 text-md border-b-2 placeholder:text-xl focus:placeholder:text-transparent" type="text" placeholder="🌐" value={inputValue}/>
        </form>
    )

}