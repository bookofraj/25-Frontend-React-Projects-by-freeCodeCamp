import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'

function ThemeChange() {

    
    // this 'useLocalStorage' custom hook is very generic i.e. can be
    // used to store any key value pair on the local storage.
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const handleToggleTheme = () => {
        setTheme(theme !== 'light' ? 'light' : 'dark')
        console.log(theme);
    }

    useEffect(()=>{
        handleToggleTheme()
        // eslint-disable-next-line
    },[])

    return (<div className="light-dark-mode" data-theme={theme}>
        <div className="theme-container">
            <p>Hello World!</p>
            <button onClick={handleToggleTheme}> Change Theme </button>
        </div>
    </div>
    )
}

export default ThemeChange