import React, { useState } from 'react';

const getOptionClass = (index, length) => {
let className = "hover:bg-gray-100 px-4 py-2"
if(index == 0) className += "rounded-t-lg";
else if(index == length - 1) className += "rounded-b-lg";
return className
}
function AutoComplete({options, text, setText, handleChange, setShowOption, showOption, setCustomerDetail, setValue}) {
   
    const select = (option) => {
        // onChange(option)
        setText(option.full_name)
        setCustomerDetail(prev => ({...prev, ...option}))
        setShowOption(false)
    }
// options.length === 0 && setCustomerDetail({})
    return (
        <div className='relative'>
            <input type='text' value={text} onChange={handleChange} className='border-2 border-gray-300 w-full focus:border-gray-400 rounded px-4 outline-none'/>
            {showOption && <ul className='absolute hover:shadow-xl shadow-lg bg-slate-200 w-full rounded-lg'>
                {options.map((option, index) => (
                    <li key={index} className={getOptionClass(index, options.length)}
                    onClick={e => select(option)}>{option.full_name}</li>
                ))}

            </ul>}
        </div>
    );
}

export default AutoComplete;