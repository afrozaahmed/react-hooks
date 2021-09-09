import React, {useRef, useState} from 'react';

const RefTutorial = () => {
    const [name,setName] = useState("Afroz");
    const inputRef = useRef(null);

    const handleClick = () => {
        setName(inputRef.current.value);
        inputRef.current.value = "";
    }
    return (
        <>
        <h1>{name}</h1>
        <input type="text" placeholder="write something" ref={inputRef}></input>
        <button onClick={handleClick}>Change Name</button>
        </>
    )
} 

export default RefTutorial;
