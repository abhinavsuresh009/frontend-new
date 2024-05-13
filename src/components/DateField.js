import React from 'react';

const StableDateField = ({ name, label, register, errors }) => {
  const todayDate = new Date().toISOString().split('T')[0];
  return (
    <>
        <label>{label}</label>
      <input
        type="date"
        className="form-control mt-1 w-full flex-col md:flex-row 
        w-full px-3  text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none"
        name={name}
        defaultValue={todayDate}
        max={todayDate}
        errors ={errors[name]}
        {...register(name, { required: true })}
      />
      </>
  );
};

export default StableDateField;
