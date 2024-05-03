import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { useForm } from "react-hook-form"
import Input from '../../components/Input';
import { Title } from '../../titles/titles';

function GoldRateForm(props) {
    const classes = 'form-control mt-1 flex justify-between ps-2 w-full md:w-full flex-col'
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm();
    const { baseurl } = useContext(AppContext)
    // let endpoint = '/user/login';
    const url = `${baseurl}goldrate/goldrate/`;


    const onSubmit = async (data) => {

        console.log(data);
        // reset();


        try {
            data.ucode = 'YOUR_PREDEFINED_UCODE_VALUE';
            data.gcode = 'YOUR_PREDEFINED_GCODE_VALUE';

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
            alert(JSON.stringify(values));
            console.log(result)

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
    const handleCancel = () => {
        reset()
        console.log('cancelled');
    };

    return (
        <div className='flex justify-center mt-10'>
            <div className="flex justify-center bg-white p-8 rounded-lg w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className='md:border md:w-1/2 w-full py-10'>
                    <Title title="Gold Rate"/>

                    <div className={classes}>
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
                    </div>

                    <div className={classes}>
                        <Input
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
                        <Input
                            style={{ textAlign: 'left' }}
                            type="date"
                            name="date"
                            label="Date"
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: "This field is required",
                            }}

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