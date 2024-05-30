import React, { createContext, useState } from 'react';

export const AppContext = createContext()

function AppProvider({children}) {
 
    const baseurl = 'http://10.54.1.62:8000'
    const [title, setTitle] = useState('Chemm Finance Ltd')
    const [comcode,setComcode] = useState('www')
    const [brcode, setBrcode] = useState('555')
    const [ucode, setUsercode] = useState('555')
    const [gcode, setGroupcode] = useState('555')
    return (
        <AppContext.Provider value={{
            baseurl,
            title,
            comcode,
            brcode,
            ucode,
            gcode,
        }}>
            {children}
        </AppContext.Provider>
    );
}
export default AppProvider;
