import { createContext, useState } from "react";

const Context = createContext()

function Provider ({children}){
    const [from, setFrom] = useState('Temuriylar davri')
    return(
        <Context.Provider value={{from,setFrom}}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider}