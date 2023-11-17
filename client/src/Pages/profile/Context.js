import React, {useState} from "react"


export const Context = React.createContext()

export const ContextProvider=({children})=>{
    const [profile, setProfile] = useState()
    return(
        <ContextProvider value={{profile, setProfile}}>
            {children}
        </ContextProvider>
    )
}