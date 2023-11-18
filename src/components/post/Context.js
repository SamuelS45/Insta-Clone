import React, {useState} from 'react';

export const Context = React.createContext(null);
export const ContextProvider=({children})=>{
    const [items, setItems] = useState(null)

    return (
        <Context.Provider value={{items, setItems}}>
            {children}
        </Context.Provider>
    )
}
