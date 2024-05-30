import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import Input from '../../components/Input';
import { ClassNames } from '../../styles/style'
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import AlertMessage from '../../components/alert/Alert';


function CompanyForm(props) {
    const classes = 'form-control mt-1 flex justify-between ps-2 w-full flex-col md:flex-row'
    const { baseurl } = useContext(AppContext)
    const url = `${baseurl}/companybranch/company/`;
    const [open, setOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState()

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
            if (response.status === 400) {
                for (const [key, value] of Object.entries(result.error)) {
                    setError(key, {
                        type: 'server',
                        message: value
                    })
                }
            }
            else if (response.status === 201) {
                setSuccessMessage(result.message)
                setOpen(true)
                reset()
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
                <form onSubmit={handleSubmit(onSubmit)} className='md:border md:p-10 p-5 md:w-1/2 w-full'>
                    <Title title="Company" />
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage}/>}
                    <Input
                        style={{ textAlign: 'left' }}
                        type="text"
                        name="comcode"
                        label="Company Code"
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
                    {/* </div> */}
                    {/* <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Company Name</label>     */}
                    <Input
                        type="text"
                        style={{ textAlign: 'left' }}
                        name="comname"
                        label="Company Name"
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
                    {/* </div> */}
                    {/* <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Phone</label>     */}
                    <Input
                        type="number"
                        style={{ textAlign: 'left' }}
                        name="phone"
                        label=" Phone"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: "This field is required",
                            minLength: {
                                value: 10,
                                message: "Please enter a minimum of 10 digits"
                            }
                        }}
                        required
                    />
                    {/* </div> */}
                    {/* <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Email</label>     */}
                    <Input
                        type="email"
                        style={{ textAlign: 'left' }}
                        name="email"
                        label="Email"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: "This field is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email format',
                            },
                        }}
                        required
                    />
                    {/* </div> */}
                    {/* <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Address</label>     */}
                    <Input
                        type="textarea"
                        style={{ textAlign: 'left' }}
                        name="address"
                        label=" Address"
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
                    {/* </div> */}
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

export default CompanyForm;