import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
import DashBoard from '../../components/DashBoard';
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import AlertMessage from '../../components/alert/Alert';
import StableDateField from '../../components/DateField';

function ReceiptPayment(props) {
    const [transactionType, setTransactionType] = useState('');
    const [open, setOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState()
    const { baseurl, comcode, brcode } = useContext(AppContext)
    const [modes, setMode] = useState([]);
    const [showMode, setShowMode] = useState(false);


    const url = `http://10.54.1.62:8000/receiptpayment/receipt/`;
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
    const handleCancel = () => {
        reset();
    };
    useEffect(() => {
        const fetchMode = async () => {
            try {
                const response = await fetch(`${baseurl}/receiptpayment/transaction-type/`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    if (data.success) {
                        const modes = data.data
                        setMode(modes);
                    } else {
                        throw new Error(data.error);
                    }
                } else {
                    throw new Error('Failed to fetch transaction types');
                }
            } catch (error) {
                console.error('Error fetching transaction types:', error);
            }
        };

        fetchMode();
    }, []);


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
    useEffect(() => {
        // Hide Other Id Number field when page loads
        setShowMode(true);
    }, []);
    return (

        <div>
            <div className="flex justify-center bg-white md:p-8 rounded-lg w-full">
                <form className="md:border md w-full py-10" onSubmit={handleSubmit(onSubmit)}>
                    <Title title="Receipt" />
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
                                name="debit"
                                label="Debit"
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
                            <label>Mode</label>
                            <select
                                defaultValue=""
                                onClick={() => setShowMode(watch("mode") !== "cash")}
                                className="border h-7 form-control mt-1 w-full flex-col md:flex-row"
                                {...register("mode", { required: true })}
                            >
                                <option value="">Choose payment</option>
                                {modes.map(modes => (
                                    <option key={modes.payment_name} value={modes.payment_name}>
                                        {modes.payment_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {showMode && (
                            <div className='w-full md:w-1/3 px-2 mb-4'>
                                <label>Bank Name</label>
                                <input
                                    type="text"
                                    className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                    {...register("bank_name", { required: true })}
                                />
                                {errors.bank_name && <p className="text-red-500 text-xs italic">This field is required</p>}
                            </div>
                        )}
                        {showMode && (
                            <div className='w-full md:w-1/3 px-2 mb-4'>
                                <label>Cheque Number</label>
                                <input
                                    type="text"
                                    className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                    {...register("cheque_no", { required: true })}
                                />
                                {errors.cheque_no && <p className="text-red-500 text-xs italic">This field is required</p>}
                            </div>
                        )}
                        {showMode && (
                            <div className='w-full md:w-1/3 px-2 mb-4'>

                                <StableDateField
                                    style={{ textAlign: 'left' }}
                                    name="cheque_date"
                                    label="Cheque Date"
                                    errors={errors}
                                    register={register}

                                    required
                                />
                                {errors.cheque_date && <p className="text-red-500 text-xs italic">This field is required</p>}
                            </div>
                        )}
                        {showMode && (
                            <div className='w-full md:w-1/3 px-2 mb-4'>
                                <label>Account Number</label>
                                <input
                                    type="text"
                                    className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                    {...register("bank_acc_no", { required: true })}
                                />
                                {errors.bank_acc_no && <p className="text-red-500 text-xs italic">This field is required</p>}
                            </div>
                        )}
                        {showMode && (
                            <div className='w-full md:w-1/3 px-2 mb-4'>
                                <label>IFSC Code</label>
                                <input
                                    type="text"
                                    className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                    {...register("ifsc_code", { required: true })}
                                />
                                {errors.ifsc_code && <p className="text-red-500 text-xs italic">This field is required</p>}
                            </div>
                        )}
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
export default ReceiptPayment;