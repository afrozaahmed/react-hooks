import React , {useEffect, useState} from 'react';
import axios from 'axios';

const EffectTutorial = () => {
    const [data,setData] = useState("");
    const [count, setCount] = useState(0);
   useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email)
        })
   },[]);

   const handleClick = () => {
       setCount(count+1);
   }
    return (
        <>
        <h1>Hello {data}</h1>
        <h2>{count}</h2>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default EffectTutorial;
