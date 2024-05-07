import React, { useContext } from 'react';
import Input from '../../components/Input';
import { useForm } from "react-hook-form"
import './login.css'
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';


function LoginForm(props) {
    const { baseurl } = useContext(AppContext);
    const url = `${baseurl}/user/login/`;
    const classes = 'form-control mt-4 block justify-between ps-2 w-full'
    const {
        register,
        setError,
        reset,
        handleSubmit,
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
            const result = await response.json();
            // reset()
            if (response.status === 400) {
                console.log(result.error)


            }

            alert(result.message)

            if (response.status === 400) {
                console.log(typeof (result.error))
                for (const [key, value] of Object.entries(result.error)) {
                    setError(key, {
                        type: 'server',
                        message: value
                    })
                }

            }
            else if (response.status === 201){
                reset()
            }

        } catch (error) {
            console.error("Error:", error);
        }
        // reset()
    };
    return (
        <div className='flex justify-center '>
            <div className="border bg-white p-8 rounded-lg w-full md:w-1/2 custom-width ">
                <Title title="Login"/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes}>
                        <label className='block text-gray-700 text-sm font-bold'>
                            Username</label>
                        <Input
                            type="text"
                            name="username"
                            style={{ textAlign: 'left' }}
                            // label="Amount"
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
                        <label className='block text-gray-700 text-sm font-bold'>
                            Password</label>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="password"
                            name="password"
                            // label="Amount"
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
                    <div className="flex justify-center mt-5">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}


export default LoginForm;