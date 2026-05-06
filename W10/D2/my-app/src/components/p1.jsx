// usecontext hook
// context help you to share data between components
// without passing props manually through every level

// why to use context?
// 1. Helps us avoid drilling
// 2. Useful for shared values:
// - theme details
// - logged in user details
// - language settings
//  - app settings
// Basic Steps
// 1 create a context 
// 2 Wrap Components with provider
// 3 Read value using useContex()
import { useState } from "react";
import { createContext,useContext } from "react"
import { useDocumentTitle, CustomHooksIntro } from "./p2";
// 1 create a context 
const ThemeContext = createContext();
// child Component 1
function Header(){
    const theme = useContext(ThemeContext);
    return(
        <header style={{
            padding:'20px',
            marginTop:'20px',
            background: theme === 'dark'? '#222' : '#eee',
            color:theme === 'dark' ? '#fff' : '#000'
        }}>
            <h3>Header component</h3>
            <p>current theme for context : {theme}</p>
        </header>
    )
}
// child component 2
function Content(){
    const theme = useContext(ThemeContext);
    return(
        <div style={{
            padding:'20px',
            marginTop:'20px',
            background: theme === 'dark'? '#333' : '#f9f9f9',
            color:theme === 'dark' ? '#fff' : '#000'
        }}>
            <p>This component also uses the same context value</p>
        </div>
    );
}
function Layout(){
    return(
        <div>
            <Header/>
            <Content/>
            <useDocumentTitle/>
            <CustomHooksIntro/>
        </div>
    )
}
 export function UseContextIntro(){
    // Sharedstate
    const [theme,setTheme] = useState('light');

    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return(
        <section>
            <h2>UseContext Example via Theme</h2>
            <p>
                Example to show the usage of context sharing
            </p>
            <button onClick={toggleTheme}>Toggle theme</button>
            <ThemeContext.Provider value={theme}>
                <Layout/>
            </ThemeContext.Provider>
        </section>
    )
}