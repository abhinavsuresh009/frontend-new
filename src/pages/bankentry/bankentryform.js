import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import StableDateField from '../../components/DateField';

function BankForm(props) {
    const classes = 'form-control mt-1 flex justify-between ps-2 w-full flex-col md:flex-row'
    const { baseurl, comcode } = useContext(AppContext)
    const url = `${baseurl}/receiptpayment/bank/`;

    const {
        register,
        setError,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            data.ucode = 'wda';
            data.gcode = 'asda';
            data.comcode = `${comcode}`
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
                alert(result.message)
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
        <div className="flex justify-center bg-white md:p-8 rounded-lg w-full">
            <form className="md:border md w-full py-10" onSubmit={handleSubmit(onSubmit)}>
                <Title title="Bank Entry" />

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="hcode"
                            label="Head Code"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="hcode1"
                            label="Head Code1"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="party_name"
                            label="Party Name"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="code"
                            label="Code"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="credit"
                            label="Credit"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="debit"
                            label="Debit"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <StableDateField
                            name="chkdate"
                            label="Cheque Date"
                            register={register}
                            errors={errors}

                            style={{ textAlign: 'left' }}
                           
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="refno"
                            label="Referance Number"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="bank_code"
                            label="Bank Code"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="bank_name"
                            label="Bank Name"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="ifsc"
                            label="IFSC Code"
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
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="acno"
                            label=" Account Number"
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
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <Input
                            type="text"
                            style={{ textAlign: 'left' }}
                            name="mode"
                            label="mode"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",
                                minLength: {
                                    value: 2,
                                    message: "Please enter a minimum of 10 digits"
                                }
                            }}
                            required
                        />
                    </div>
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
    );
}
export default BankForm;