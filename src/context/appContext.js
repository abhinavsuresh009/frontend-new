import React, { createContext, useState } from 'react';

export const AppContext = createContext()

function AppProvider({children}) {
 
    const baseurl = 'http://10.54.1.62:8000'
    const [title, setTitle] = useState('Chemm Finance Ltd')
    const [comcode,setComcode] = useState('itm')
    const [brcode, setBrcode] = useState('sssss')
    return (
        <AppContext.Provider value={{
            baseurl,
            title,
            comcode,
            brcode
        }}>
            {children}
        </AppContext.Provider>
    );
}
export default AppProvider;
