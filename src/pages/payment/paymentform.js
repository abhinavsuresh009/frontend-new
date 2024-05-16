import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import DashBoard from '../../components/DashBoard';
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import AlertMessage from '../../components/alert/Alert';
import StableDateField from '../../components/DateField';

function Payment(props) {
    const [transactionType, setTransactionType] = useState('');
    const [open, setOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState()
    const { baseurl, comcode, brcode } = useContext(AppContext)

    const url = `http://10.54.1.62:8000/receiptpayment/payment/`;
    const {
        register,
        setError,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // to generate random cusid
    //  reset form 
    const selectedChoice = watch("type");
    const handleCancel = () => {
        reset();
    };

    const onSubmit = async (data) => {
        try {
            data.comcode = comcode;
            data.brcode = brcode;
            data.ucode = 'YOUR_PREDEFINED_UCODE_VALUE';
            data.gcode = 'YOUR_PREDEFINED_GCODE_VALUE';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            console.log(result)

            if (response.status === 400) {
                for (const [key, value] of Object.entries(result.error)) {
                    setError(key, {
                        type: 'server',
                        message: value
                    })
                }

            }
            else if (response.status === 201) {
                handleCancel(); // Reset the form and radio buttons
                setSuccessMessage(result.message)
                setOpen(true)

            }

        } catch (error) {
            console.error("Error:", error);
        }
        // reset()
    };
    const handleTransactionTypeChange = (event) => {
        setTransactionType(event.target.value);
    };
    // To handle radio button
    return (

        <div>
            <div className="flex justify-center bg-white md:p-8 rounded-lg w-full">
                <form className="md:border md w-full py-10" onSubmit={handleSubmit(onSubmit)}>
                    <Title title="Payment" />
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage} />}
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
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
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="tr_head"
                                label="Account Head Code"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="name"
                                label="Name"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="code"
                                label="Code"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="code_from"
                                label="Code From"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="credit"
                                label="Credit"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 arrow_none" >
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="voucher_no"
                                label="Voucher Number"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">

                            <StableDateField
                                style={{ textAlign: 'left' }}
                                name="cheque_date"
                                label="Cheque Date"
                                errors={errors}
                                register={register}

                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 arrow_none">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="cheque_no"
                                label="Cheque Number"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 arrow_none">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="bank_name"
                                label="Bank Name"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="bank_acc_no"
                                label="Account Number"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />

                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="ifsc_code"
                                label="IFSC Code"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                        <label>Mode</label>
                            <select {...register("mode", { required: true })}
                                name="mode"
                                className="w-full h-7 border text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none"
                                defaultValue="Choose"
                                register={register}>
                                <option value="">Choose</option>
                                <option value="cash">Cash</option>
                                <option value="cheque">Cheque</option>
                            </select>

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
            </div >
        </div >
    );
}
export default Payment;