import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import AlertMessage from '../../components/alert/Alert';

function VoucherHead(props) {
    const [open, setOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState();
    const { baseurl, comcode, brcode, gcode, ucode } = useContext(AppContext);
    const [accountinghead, setAccountingHead] = useState([]);

    const url = `${baseurl}/receiptpayment/voucher-head/`;
    const {
        register,
        setError,
        reset,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const fetchHeadcode = async () => {
            try {
                const response = await fetch(`${baseurl}/receiptpayment/accounting-heads/`);
                if (response.ok) {
                    const data = await response.json();
                    setAccountingHead(data);
                    console.log(data);
                } else {
                    throw new Error('Failed to fetch Accounting Head');
                }
            } catch (error) {
                console.error("Error fetching Accounting Head:", error);
            }
        };
        fetchHeadcode();
    }, [baseurl]); // Ensure useEffect runs only when baseurl changes

    // Reset form 
    const handleCancel = () => {
        reset();
    };

    const onSubmit = async (data) => {
        try {
            data.comcode = comcode;
            data.brcode = brcode;
            data.ucode = ucode;
            data.gcode = gcode;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);

            if (response.status === 400) {
                for (const [key, value] of Object.entries(result.error)) {
                    setError(key, {
                        type: 'server',
                        message: value
                    });
                }
            } else if (response.status === 201) {
                handleCancel(); // Reset the form and radio buttons
                setSuccessMessage(result.message);
                setOpen(true);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-center bg-white md:p-8 rounded-lg w-full">
                <form className="md:border md:w-full py-10" onSubmit={handleSubmit(onSubmit)}>
                    <Title title="Voucher Head" />
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage} />}
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <label>Choose Head</label>
                            <select
                                {...register("choose", { required: "This field is required" })}
                                className="overflow-scroll form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1 rounded"
                                onChange={(e) => {
                                    const selectedHeadCode = e.target.value;
                                    setValue("head_code", selectedHeadCode); // Set the value of "head_code" to the selected head code
                                    const selectedHead = accountinghead.find(hcode => hcode.head_code === selectedHeadCode);
                                    // Set the value of "description" and "fk_AccountingHead" based on the selected head
                                    setValue("description", selectedHead ? selectedHead.name : "");
                                    setValue("fk_AccountingHead", selectedHead ? selectedHead.id : "");
                                }}>
                                <option value="">Select Head</option>
                                {accountinghead && accountinghead.map(hcode => (
                                    <option key={hcode.head_code} value={hcode.head_code}>
                                        {hcode.head_code} - {hcode.name}
                                    </option>
                                ))}
                            </select>
                            {errors.choose && <p className='text-red-500 text-xs italic'>{errors.choose.message}</p>}
                        </div>

                        <div className='hidden w-full md:w-1/2 px-2 mb-4'>
                            <label>Head Code</label>
                            <input
                                type="text"
                                readOnly
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                {...register("head_code", { required: true })}
                            />
                            {errors.head_code && <p className="text-red-500 text-xs italic">{errors.head_code.message}</p>}
                        </div>

                        <div className='w-full md:w-1/2 px-2 mb-4'>
                            <label>Narration</label>
                            <input
                                type="text"
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
                        </div>

                        <div className='hidden w-full md:w-1/2 px-2 mb-4'>
                            <label>fk_AccountingHead</label>
                            <input
                                type="text"
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                {...register("fk_AccountingHead", { required: true })}
                            />
                            {errors.fk_AccountingHead && <p className="text-red-500 text-xs italic">{errors.fk_AccountingHead.message}</p>}
                        </div>
                    </div>
                    <div className='md:flex justify-end pr-10 sm:ml-10'>
                        <div className="flex justify-center mt-5">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </div>
                        <div className="flex justify-center mt-5 md:pr-10">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VoucherHead;
