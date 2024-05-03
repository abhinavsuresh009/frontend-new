import React, { useState } from 'react';
import './stepper.css'
import { ClassNames } from '../../styles/style';
function Stepper({setCurrentStep, currentStep}) {
    const steps = ['Applications', 'Gold Loan',
     'Pledge Details',
    //   'Accounts Details'
    ]
    
    
    return (
        <>       
         <div className='mx-4  p-4 flex justify-between items-center'>
            {steps.map((step, index)=>(

            <div key={index} className={`relative  flex flex-col justify-center text-teal-600  items-center step-item w-1/2`}>
            <div className={`w-10 h-10 flex items-center justify-center z-10 relative ${currentStep===index+1?'bg-green-500':'bg-gray-500'} ${index + 1 < currentStep && 'bg-green-500'} rounded-full text-white`}>{index+1}</div>
            <p className='text-gray-500 text-center w-32 text-xs  uppercase'>{step}</p>
        </div>
    ))} 
    </div>
   
    </>
  );
}

export default Stepper;