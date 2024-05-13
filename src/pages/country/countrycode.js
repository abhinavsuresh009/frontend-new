import React, { useState } from 'react';
import DashBoard from '../../components/DashBoard';
import CreateCountryForm from '../../components/Country';
import CreateStateForm from '../../components/State';
import CreateCityForm from '../../components/City';

function RegisterCountry(props) {
    const [selectedOption, setSelectedOption] = useState('countryForm');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div >
            <div className='flex justify-around mt-10'>
            <label htmlFor="dropdown">Select a Form:</label>
            <select 
                id="dropdown" 
                value={selectedOption} 
                onChange={handleChange}
                className="w-1/3 h-7 border mt-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none"

            >
                <option value="">Select</option>
                <option value="countryForm">Country Form</option>
                <option value="stateForm">State Form</option>
                <option value="cityForm">City Form</option>
            </select>
            </div>
            {/* Render selected form */}
            {selectedOption === 'countryForm' && <CreateCountryForm />}
            {selectedOption === 'stateForm' && <CreateStateForm />}
            {selectedOption === 'cityForm' && <CreateCityForm />}
        </div>
    );
}

export default RegisterCountry;