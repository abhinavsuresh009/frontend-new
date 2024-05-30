import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import DashBoard from '../../components/DashBoard';
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import AlertMessage from '../../components/alert/Alert';

function Receipt(props) {
    const [open, setOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const { baseurl, comcode, brcode } = useContext(AppContext);
    const [modes, setMode] = useState([]);
    const [showMode, setShowMode] = useState(false);
    const [voucherhead, setVoucherHead] = useState([]);
    
    const url = `${baseurl}/receiptpayment/receipt/`;
    const {
        register,
        setError,
        reset,
        watch,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const fetchAccounting = async () => {
            try {
                const response = await fetch(`${baseurl}/receiptpayment/voucher-head/`);
                if (response.ok) {
                    const data = await response.json();
                    setVoucherHead(data.data);
                } else {
                    throw new Error('Failed to fetch Accounting Head');
                }
            } catch (error) {
                console.error("Error fetching Accounting Head:", error);
            }
        };
        fetchAccounting();
    }, [baseurl]);

    const handleCancel = () => {
        reset();
        setShowMode(false);
    };

    useEffect(() => {
        const fetchMode = async () => {
            try {
                const response = await fetch(`${baseurl}/receiptpayment/transaction-type/`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {
                        setMode(data.data);
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
    }, [baseurl]);

    const onSubmit = async (data) => {
        try {
            if (data.mode === "cash") {
                delete data.bank_name;
                delete data.cheque_date;
                delete data.cheque_no;
                delete data.bank_acc_no;
                delete data.ifsc_code;
            } else {
                if (data.cheque_date) {
                    data.cheque_date = new Date(data.cheque_date).toISOString().split('T')[0];
                }
            }
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
            });
            const result = await response.json();

            if (response.status === 400) {
                for (const [key, value] of Object.entries(result.error)) {
                    setError(key, {
                        type: 'server',
                        message: value
                    });
                }
            } else if (response.status === 201) {
                handleCancel();
                setSuccessMessage(result.message);
                setOpen(true);
                setShowMode(false);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleModeChange = (e) => {
        const selectedMode = e.target.value;
        setShowMode(selectedMode !== "cash" && selectedMode !== "");
    };

    return (
        <div>
            <div className="flex justify-center bg-white md:p-8 rounded-lg w-full">
                <form className="md:border md w-full py-10" onSubmit={handleSubmit(onSubmit)}>
                    <Title title="Receipt" />
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage} />}
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <label>Choose Head</label>
                            <select
                                id="voucher-head-select"
                                {...register("choose", { required: "This field is required" })}
                                className="overflow-scroll form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1"
                                onChange={(e) => {
                                    const [selectedHeadCode, selectedDescription, selectedAccountingHeadId] = e.target.value.split('|');
                                    setValue("hcode", selectedHeadCode, { shouldValidate: true, shouldDirty: true });
                                    setValue("name", selectedDescription, { shouldValidate: true, shouldDirty: true });
                                    setValue("fk_AccountingHead", selectedAccountingHeadId, { shouldValidate: true, shouldDirty: true });
                                }}
                            >
                                <option value="">Select Head</option>
                                {voucherhead && voucherhead.map((hcode, index) => (
                                    <option key={`${hcode.head_code}-${index}`} value={`${hcode.head_code}|${hcode.description}|${hcode.fk_AccountingHead}`}>
                                        {hcode.head_code} - {hcode.description}
                                    </option>
                                ))}
                            </select>
                            {errors.choose && <p className='text-red-500 text-xs italic'>{errors.choose.message}</p>}
                        </div>
                        <div className='w-full md:w-1/2 px-2 mb-4'>
                            <label>Name</label>
                            <input
                                type="text"
                                readOnly
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-red-500 text-xs italic">This field is required</p>}
                        </div>
                        <div className='hidden w-full md:w-1/2 px-2 mb-4'>
                            <label>Head Code</label>
                            <input
                                type="text"
                                readOnly
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                {...register("hcode", { required: true })}
                            />
                            {errors.hcode && <p className="text-red-500 text-xs italic">This field is required</p>}
                        </div>
                        <div className='hidden w-full md:w-1/2 px-2 mb-4'>
                            <label>Accounting Head Id</label>
                            <input
                                type="text"
                                readOnly
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                {...register("fk_AccountingHead", { required: true })}
                            />
                            {errors.hcode && <p className="text-red-500 text-xs italic">This field is required</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="credit"
                                label="Amount"
                                errors={errors}
                                register={register}
                                validationSchema={{ required: "This field is required" }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <label>Mode</label>
                            <select
                                defaultValue=""
                                onClick={handleModeChange}
                                className="border h-7 form-control mt-1 w-full flex-col md:flex-row capitalize"
                                {...register("mode", { required: "This field is required" })}
                            >
                                <option value="">Choose payment</option>
                                {modes.map(mode => (
                                    <option key={mode.payment_name} value={mode.payment_name}>
                                        {mode.payment_name}
                                    </option>
                                ))}
                            </select>
                            {errors.mode && <p className="text-red-500 text-xs italic">Please select one payment option</p>}
                        </div>
                        {showMode && (
                            <>
                                <div className='w-full md:w-1/2 px-2 mb-4'>
                                    <label>Bank Name</label>
                                    <input
                                        type="text"
                                        className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                        {...register("bank_name", { required: "This field is required" })}
                                    />
                                    {errors.bank_name && <p className="text-red-500 text-xs italic">{errors.bank_name.message}</p>}
                                </div>
                                <div className='w-full md:w-1/2 px-2 mb-4'>
                                    <label>Cheque Date</label>
                                    <input
                                        type="date"
                                        className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                        {...register("cheque_date", { required: "This field is required" })}
                                    />
                                    {errors.cheque_date && <p className="text-red-500 text-xs italic">{errors.cheque_date.message}</p>}
                                </div>
                                <div className='w-full md:w-1/2 px-2 mb-4'>
                                    <label>Cheque Number/Ref No.</label>
                                    <input
                                        type="text"
                                        className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                        {...register("cheque_no", { required: "This field is required" })}
                                    />
                                    {errors.cheque_no && <p className="text-red-500 text-xs italic">{errors.cheque_no.message}</p>}
                                </div>
                                <div className='w-full md:w-1/2 px-2 mb-4'>
                                    <label>Account Number</label>
                                    <input
                                        type="text"
                                        className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                        {...register("bank_acc_no", { required: "This field is required" })}
                                    />
                                    {errors.bank_acc_no && <p className="text-red-500 text-xs italic">{errors.bank_acc_no.message}</p>}
                                </div>
                                <div className='w-full md:w-1/2 px-2 mb-4'>
                                    <label>IFSC Code</label>
                                    <input
                                        type="text"
                                        className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                        {...register("ifsc_code", { required: "This field is required" })}
                                    />
                                    {errors.ifsc_code && <p className="text-red-500 text-xs italic">{errors.ifsc_code.message}</p>}
                                </div>
                            </>
                        )}
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="description"
                                label="Description (optional)"
                                errors={errors}
                                register={register}
                            />
                        </div>
                    </div>
                    <div className='md:flex justify-end pr-10 sm: ml-10'>
                        <div className="flex justify-center mt-5 md:pr-10">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </div>
                        <div className="flex justify-center mt-5">
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

export default Receipt;
