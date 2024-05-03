import React, { createContext, useState } from 'react';

export const LoanContext = createContext()

function LoanProvider({children}) {
    let [goldData, setGoldData] = useState({'application':''})
    
    return (
        <LoanContext.Provider value={{
          goldData,
          setGoldData
        }}>
            {children}
        </LoanContext.Provider>
    );
}
export default LoanProvider;
