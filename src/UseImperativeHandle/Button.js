import React, { forwardRef, useState, useImperativeHandle } from 'react';

const Button = forwardRef((props,ref) => {
    const [toggle,setToggle] = useState(false);

    useImperativeHandle(ref,()=>({
        handleToggle(){
            setToggle(!toggle);
        },
    }))

    return (
        <>
        <button>Button from Child</button>
        {toggle && <p>Toggle</p>}
        </>
    )
})

export default Button;