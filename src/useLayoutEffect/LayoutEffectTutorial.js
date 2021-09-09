import React, {useLayoutEffect, useEffect, useRef} from 'react';

const LayoutEffectTutorial = () => {
    const inputRef = useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);

    useEffect(()=>{
        inputRef.current.value = "Hello";
    },[]);
    return (
        <div className="App">
            <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
        </div>
    )
}

export default LayoutEffectTutorial;