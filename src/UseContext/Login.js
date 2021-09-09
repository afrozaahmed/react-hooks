import React, {useContext} from 'react';
import {AppContext} from './ContextTutorial'

const Login = () => {
    const {setUsername} = useContext(AppContext);
    return (
        
            <input onChange = {(event)=>{setUsername(event.target.value)}}></input>
        
    )
}

export default Login;