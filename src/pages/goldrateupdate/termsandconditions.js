import React, { useState } from 'react';
import LoanPageTwo from "./loanpage2";
import Terms from "./termskannada";

function SelectTerms(props) {
    const [selectedOption, setSelectedOption] = useState('eng');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        
        <div >
            <div className='flex justify-around mt-10'>
            <select 
                id="dropdown" 
                value={selectedOption} 
                onChange={handleChange}
                className="w-1/3 h-7 border mt-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none"

            >
                <option value="eng">English</option>
                <option value="kannada">Kannada</option>
            </select>
            </div>
            {/* Render selected form */}
            {selectedOption === 'eng' && <LoanPageTwo />}
            {selectedOption === 'kannada' && <Terms />}
        </div>
    );
}

export default SelectTerms;