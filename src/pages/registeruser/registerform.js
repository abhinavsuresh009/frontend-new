import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import Input from '../../components/Input';
import { useForm } from "react-hook-form"
import { Title } from '../../titles/titles';


function RegisterForm(props) {
    const { baseurl } = useContext(AppContext)
    const url = `${baseurl}/user/create-user/`;
    const classes = 'form-control mt-4 block justify-between ps-2 w-full arrow_none'
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            console.log(response)
            const result = await response.json(Object.values);
            const values = Object.values(result);
            // alert(JSON.stringify(values));
            // console.log(result)

            if (response.status === 400) {
                // console.log(typeof (result.error))
                for (const [key, value] of Object.entries(result.error)) {
                    setError(key, {
                        type: 'server',
                        message: value
                    })
                }

            }
            else if (response.status === 201){
                reset()
                alert(result.message)
            }

        } catch (error) {
            console.error("Error:", error);


        }

    };
    const handleCancel = () => {
        reset()
        console.log('cancelled');
    };
    return (

        <div className='flex justify-center mt-10'>
            <div className="flex justify-center bg-white p-8 rounded-lg w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className='border md:w-1/2 w-full py-10 px-5'>
                    <Title title="Register"/>

                    <div className={classes}>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="username"
                            className='block text-gray-700 text-sm font-bold'
                            label="User name"
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
                    <div className={classes}>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="comcode"
                            label="Company code"
                            className='block text-gray-700 text-sm font-bold'
                            errors={errors}
                            register={register}

                            validationSchema={{
                                required: "This field is required",
                                minLength: {
                                    value: 3,
                                    message: "Please enter a minimum of 3 characters",

                                }
                            }}


                            required
                        />
                    </div>

                    <div className={classes}>
                        <Input
                            className='block text-gray-700 text-sm font-bold'
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="brcode"
                            label="Branch Code"
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
                    <div className={classes}>
                        <Input
                            className='block text-gray-700 text-sm font-bold'
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="email"
                            label="Email"
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
                    <div className={classes} >
                        <Input
                            className='block text-gray-700 text-sm font-bold'
                            style={{ textAlign: 'left' }}
                            type="number"
                            name="phone"
                            label="Mobile"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",
                                minLength: {
                                    value: 10,
                                    message: "Phone number must need 10 numbers"
                                }
                            }}

                            required
                        />
                    </div>
                    <div className={classes}>
                        <Input
                            className='block text-gray-700 text-sm font-bold'
                            style={{ textAlign: 'left' }}
                            type="password"
                            name="password"
                            label="Password"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",
                                minLength: {
                                    value: 4,
                                    message: "Please enter a minimum of 4 characters"
                                }
                            }}

                            required
                        />
                    </div>
                    <div className={classes}>
                        <Input
                            className='block text-gray-700 text-sm font-bold'
                            style={{ textAlign: 'left' }}
                            type="password"
                            name="confirm_password"
                            label="Confirm Password"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",
                                minLength: {
                                    value: 4,
                                    message: "Please enter a minimum of 4 characters"
                                }
                            }}

                            required
                        />
                    </div>
                    {/* <button type="button" className={ClassNames.ButtonSuccess}> Submit</button> */}
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

export default RegisterForm;