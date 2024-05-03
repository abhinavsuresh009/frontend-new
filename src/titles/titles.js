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
            <h1 className='text-black-500 text-xl mt-3 pb-6 flex justify-center font-bold custom-font'>{title}</h1>
        </div>
    )
}

// function LoginTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>LOGIN</h1>
//         </div>
//     )
// }
// function RegisterTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>Register</h1>
//         </div>
//     )
// }
// function CustomerTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>Customer</h1>
//         </div>
//     )
// }
// function GoldrateTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>Goldrate</h1>
//         </div>
//     )
// }
// function BranchTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>Branch</h1>
//         </div>
//     )
// }
// function PasswordTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>Change Password</h1>
//         </div>
//     )
// }
// function CompanyTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>Company</h1>
//         </div>
//     )
// }
// function CompanyDetailsTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl   flex justify-center font-bold custom-font'>Company Details</h1>
//         </div>
//     )
// }
// function BranchListTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl mt-10 flex justify-center font-bold custom-font'>Branch List</h1>
//         </div>
//     )
// }
// function UserListTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl mt-10 flex justify-center font-bold custom-font'>User List</h1>
//         </div>
//     )
// }
// function CustomerListTitle(props) {
//     return (
//         <div>
//             <h1 className='text-black-500 text-xl mt-10 flex justify-center font-bold custom-font'>Customer List</h1>
//         </div>
//     )
// }
export {ClosingLoan, NavTitle, Title}

