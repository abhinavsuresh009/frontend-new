// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/appContext';
// import { useForm } from "react-hook-form"
// import Input from './Input';
// import { Title } from '../titles/titles';
// import AlertMessage from './alert/Alert';

// function CreateStateForm() {
//     const {
//         register,
//         handleSubmit,
//         setError,
//         reset,
//         formState: { errors },
//     } = useForm();
//     const classes = 'form-control mt-4 block justify-between ps-2 w-full arrow_none';
//     const { baseurl, comcode, brcode } = useContext(AppContext);
//     const [open, setOpen] = useState(false);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const url = `${baseurl}/placecode/state/`;

//     const onSubmit = async (data) => {
//         try {
//             data.comcode = `${comcode}`;
//             data.brcode = `${brcode}`;
//             data.ucode = 'we';
//             data.gcode = 'us';

//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             });

//             const result = await response.json();
//             console.log('response',data);
//             const values = Object.values(result);
//             if (response.status === 400 && result.error) { // Check if result.error exists
//                 // Ensure result.error is an object before iterating over it
//                 if (typeof result.error === 'object') {
//                     for (const [key, value] of Object.entries(result.error)) {
//                         setError(key, {
//                             type: 'server',
//                             message: value
//                         });
//                     }
//                 }
//             }
//             else if (response.status === 201){
//                 reset()
//                 setSuccessMessage(result.message)
//                 setOpen(true)

//             } 
//         } catch (error) {
//             console.error("error:", error);
//         }
//     };
//     const handleCancel = () => {
//         reset()
//     };


//     return (
//         <div className='flex justify-center mt-10'>
//             <div className="flex justify-center bg-white p-8 rounded-lg w-full ">
//                 <form onSubmit={handleSubmit(onSubmit)} className='md:border md:p-10 p-5 md:w-1/2 w-full'>
//                     <Title title="State"/>
//                     {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage}/>}
//                     {errorMessage && <AlertMessage type="error">{errorMessage}</AlertMessage>}
//                     <div className={classes}>
//                         <Input
//                             style={{ textAlign: 'left' }}
//                             type="text"
//                             name="country_code"
//                             label="Country Code"
//                             errors={errors}
//                             register={register}
//                             required
//                         />
//                     </div>
//                     <div className={classes}>
//                         <Input
//                             style={{ textAlign: 'left' }}
//                             type="text"
//                             name="state_code"
//                             label="State Code"
//                             errors={errors}
//                             register={register}
                            
//                             required
//                         />
//                     </div>
//                     <div className={classes}>
//                         <Input
//                             style={{ textAlign: 'left' }}
//                             type="text"
//                             name="state_name"
//                             label="State Name"
//                             errors={errors}
//                             register={register}
//                             validationSchema={{
//                                 required: "This field is required",
//                                 minLength: {
//                                     value: 3,
//                                     message: "Please enter a minimum of 3 characters"
//                                 }
//                             }}
//                             required
//                         />
//                     </div>
//                     <div className='md:flex justify-end pr-10 sm: ml-10'>
//                         <div className="flex justify-center mt-5 md:pr-10">
//                             <button
//                                 type="button"
//                                 onClick={handleCancel}
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                         <div className="flex justify-center mt-5">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CreateStateForm;

import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/appContext';
import { useForm } from "react-hook-form";
import Input from './Input';
import { Title } from '../titles/titles';
import AlertMessage from './alert/Alert';

function CreateStateForm() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm();
    const classes = 'form-control  mt-4 block justify-between ps-2 w-full arrow_none';
    const { baseurl, comcode, brcode } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`${baseurl}/placecode/countries/`);
                if (response.ok) {
                    const data = await response.json();
                    setCountries(data.data);
                    console.log(data.data.country_code) // Set the fetched countries to state
                } else {
                    throw new Error('Failed to fetch countries');
                }
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, [baseurl]); // Ensure useEffect runs only when baseurl changes

    const onSubmit = async (data) => {
        try {
            data.comcode = `${comcode}`;
            data.brcode = `${brcode}`;
            data.ucode = 'we';
            data.gcode = 'us';

            const response = await fetch(`${baseurl}/placecode/state/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log('response', data);
            if (response.status === 400 && result.error) { // Check if result.error exists
                // Ensure result.error is an object before iterating over it
                if (typeof result.error === 'object') {
                    for (const [key, value] of Object.entries(result.error)) {
                        setError(key, {
                            type: 'server',
                            message: value
                        });
                    }
                }
            } else if (response.status === 201) {
                reset();
                setSuccessMessage(result.message);
                setOpen(true);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleCancel = () => {
        reset();
    };

    return (
        <div className='flex justify-center mt-10'>
            <div className="flex justify-center bg-white p-8 rounded-lg w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className='md:border md:p-10 p-5 md:w-1/2 w-full'>
                    <Title title="State"/>
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage}/>}
                    {errorMessage && <AlertMessage type="error">{errorMessage}</AlertMessage>}
                    <div className={classes}>
                        <label>Country Code</label>
                        <select {...register("country_code", { required: "This field is required" })} 
                        className="overflow-scroll form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1 rounded">
                            <option value="">Select Country</option>
                            {countries.map(country => (
                                <option key={country.country_code} value={country.country_code}>
                                    {country.country_code} - {country.country_name} 
                                </option>
                            ))}
                        </select>
                        {errors.country_code && <p className='text-red-500 text-xs italic'>{errors.country_code.message}</p>}
                    </div>
                    <div className={classes}>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="state_code"
                            label="State Code"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",
                                pattern: {
                                    value: /^[0-9]+$/,              // '/^\+[0-9]+$/' + infront
                                    message: "white space and non Nuemeric characters not allowed"
                                }
                            }}
                            required
                        />
                    </div>
                    <div className={classes}>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="state_name"
                            label="State Name"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",
                                minLength: {
                                    value: 3,
                                    message: "Please enter a minimum of 3 characters"
                                }
                            }}
                            required
                        />
                    </div>
                    <div className='md:flex justify-end pr-10 sm: ml-10'>
                        <div className="flex justify-center mt-5 md:pr-10">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateStateForm;

