import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/appContext';
import { useForm } from "react-hook-form"
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import StableDateField from '../../components/DateField'
import AlertMessage from '../../components/alert/Alert';

function GoldRateForm(props) {
    const classes = 'form-control mt-1 pr-2 flex justify-between ps-2 w-full md:w-full flex-col'
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm();
    const { baseurl, comcode } = useContext(AppContext)
    const [open, setOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState()
    const [branchCodes, setBranchCodes] = useState([]);

    const url = `${baseurl}/goldrate/goldrate/`;

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await fetch(`${baseurl}/companybranch/branches/${comcode}/`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {
                        const branchCodes = data.data.map(branch => branch.brcode);
                        setBranchCodes(branchCodes);
                    } else {
                        throw new Error(data.error);
                    }
                } else {
                    throw new Error('Failed to fetch branches');
                }
            } catch (error) {
                console.error('Error fetching branches:', error);
            }
        };
    
        fetchBranches();
    }, []);
    

    const onSubmit = async (data) => {
        try {
            data.ucode = 'YOUR_PREDEFINED_UCODE_VALUE';
            data.gcode = 'YOUR_PREDEFINED_GCODE_VALUE';
            data.comcode = `${comcode}`

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
        // reset()
    };
    const handleCancel = () => {
        reset()
    };
    return (
        <div className='flex justify-center mt-10'>
            <div className="flex justify-center bg-white p-8 rounded-lg w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className='md:border md:w-1/2 w-full py-10'>
                    <Title title="Gold Rate" />
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage} />}
                    <div className={classes}>
                        <select
                            {...register('brcode', { required: 'Branch Code is required' })}
                            className="border h-7  form-control mt-1  w-full flex-col md:flex-row "
                        >
                            <option value="">Select Branch Code</option>
                            {branchCodes.map(branchCode => (
                                <option key={branchCode} value={branchCode}>{branchCode}</option>
                            ))}
                        </select>
                        {errors.brcode && <span className="text-red-500">{errors.brcode.message}</span>}
                    </div>
                    <div className={classes}>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="rate"
                            label="Rate"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",

                            }}

                            required
                        />

                    </div>
                    <div className={classes} >
                        <StableDateField
                            name="date"
                            label="Date"
                            register={register}
                            errors={errors}
                            style={{ textAlign: 'left' }}
                            required
                        />
                    </div>
                    <div className={classes}>
                        <Input
                            style={{ textAlign: 'left' }}
                            type="text"
                            name="description"
                            label="Description"
                            errors={errors}
                            register={register}

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

export default GoldRateForm;