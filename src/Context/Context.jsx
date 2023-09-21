import { createContext, useState } from "react";

const Context = createContext()

function Provider ({children}){
    const [from, setFrom] = useState('Jadid adabiyoti ')
    const [sevimlilar , setSevimlilar] = useState([])
    const [ochilishi, setOchilishi] = useState(true)
    const [image, setImage] = useState("")
    return(
        <Context.Provider value={{from,setFrom,sevimlilar,setSevimlilar ,ochilishi, setOchilishi,image,setImage}}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider}