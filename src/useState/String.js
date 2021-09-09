import React, {useState} from 'react';

const String = () => {
    const [inputValue,setInputValue] = useState("Afroz");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
        {inputValue}  <input placeholder="try something..." onChange={handleChange}></input>
        </>
    )
}

export default String;
