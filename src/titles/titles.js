import React from 'react';

function ClosingLoan(props) {
    return (
        <div className='flex justify-center font-bold'>
            <h1>Closing Loan</h1>
        </div>
    );
}

function NavTitle({name}) {
    return (
        <div>
            <h1 className='text-white font-semibold'>{name}</h1>
        </div>
    );
}


function Title({title}) {
    return (
        <div>
            <h1 className='text-black-500 text-xl pb-6 flex justify-center custom-font'>{title}</h1>
        </div>
    )
}

export {ClosingLoan, NavTitle, Title}

