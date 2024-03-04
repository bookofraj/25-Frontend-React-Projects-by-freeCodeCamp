import { useEffect, useState } from 'react'

function useLocalStorage({ key , defaultValue }) {

    const [value, setValue] = useState(()=>{
        let currentValue

        try {
            //look into localstorage for theme value and if not found any then sets value = defaultValue (passed from parent component)
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch (error) {
            console.log(error.message)
            currentValue = defaultValue   
        }
        return currentValue
    })

    useEffect(()=>{
        localStorage.setItem('key', JSON.stringify(value))          //saves theme value on local storage
    },[key,value])

    // useEffect(()=>{
    //     localStorage.setItem('key',"light")
    // },[])

  return [value, setValue]
}

export default useLocalStorage