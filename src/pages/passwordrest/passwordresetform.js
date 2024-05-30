import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import AlertMessage from '../../components/alert/Alert';

function PasswordResetForm(props) {
    const { baseurl } = useContext(AppContext)
    const url = `${baseurl}/user/update-password/`;
    const [open, setOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState()

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
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Token ac25cc1d7a6eb9843a2dd880e4fe2e29f85bbec1"
                },
                body: JSON.stringify(data)
            })
            const result = await response.json(Object.values);
            const values = Object.values(result);
            if (response.status === 400) {
                for (const [key, value] of Object.entries(result.error)) {
                    setError(key, {
                        type: 'server',
                        message: value
                    })
                }
            }
            else if (response.status === 201) {
                reset()
                setSuccessMessage(result.message)
                setOpen(true)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handleCancel = () => {
        reset()
    };

    return (
        <div className='flex justify-center'>
            <div className="flex justify-center bg-white p-8 rounded-lg w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className='md:border md:w-1/2 w-full py-10 md:px-5'>
                    <Title title="Change Password" />
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage}/>}
                    <div className={classes}>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="password"
                            name="current_password"
                            label="Current Password"
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
                            type="password"
                            name="new_password"
                            label="New Password"
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
                            type="password"
                            name="confirm_password"
                            label="Confirm Password"
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

export default PasswordResetForm;