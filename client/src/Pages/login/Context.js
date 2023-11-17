import React, {useState} from "react";


export const Context = React.createContext('Sam')
export const ContextProvider=({children})=>{
    const [name, setName] = useState('Sam')
    return(
        <ContextProvider value = {{name, setName}}>
            {children}
        </ContextProvider>
    )
}