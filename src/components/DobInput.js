import React, { useState, useEffect } from 'react';

function DateOfBirthPicker({ name, label, register, errors} ) {
  const [dateOfBirth, setDateOfBirth] = useState('');

  useEffect(() => {
    // Calculate 18 years ago from today
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    // Set default date to 18 years ago
    setDateOfBirth(eighteenYearsAgo.toISOString().substr(0, 10));
  }, []);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    // Check if selected date is at least 18 years ago
    if (selectedDate <= eighteenYearsAgo) {
      setDateOfBirth(event.target.value);
    } else {
      alert('Date of birth must be at least 18 years ago.');
      // Reset to default date
      setDateOfBirth(eighteenYearsAgo.toISOString().substr(0, 10));
    }
  };

  return (
    <div>
        <label>{label}</label>

      <input 
        type="date" 
        onChange={handleDateChange} 
        className="form-control mt-1  ps-2 w-full flex-col md:flex-row 
        w-full px-3  text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none"
        name={name}
        max={dateOfBirth}
        errors ={errors[name]}
        {...register(name, { required: true })}
      />
    </div>
  );
}

export default DateOfBirthPicker;
