import { useEffect, useState } from "react"

function useLocalStorage(key,initValue) {
    const [value, setvalue] = useState(() => {
        try{
            const newValue = localStorage.getItem(key)
            if(newValue) {
             const qiymat = JSON.parse(localStorage.getItem(key))
             return qiymat
            }else{
                return initValue
            }
    } catch(error){
        return initValue;
    }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return[value, setvalue]
}

export default useLocalStorage