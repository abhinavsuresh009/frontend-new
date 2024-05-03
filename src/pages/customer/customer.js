import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import DashBoard from '../../components/DashBoard';
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';


function Customer(props) {
    const [selectedValue, setSelectedValue] = useState('');
    const { baseurl , comcode, brcode} = useContext(AppContext)
    const url = `${baseurl}/customer/register-customer/`;
   
    const branchcode = `${brcode}`;
    const {
        register,
        setError,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // to generate random cusid
    const generateUniqueId = () => {
        const randomNumber = Math.random().toString(36).substr(2, 6);
        return `${randomNumber}`;
    };
    const onSubmit = async (data) => {
        try {
            const cusid = generateUniqueId()
            data.cusid = cusid;
            data.gender = selectedValue;
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
            console.log(response)
            const result = await response.json();
           

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
                alert(result.message)
            }


        } catch (error) {
            console.error("Error:", error);
        }
        // reset()
    };
    // To handle radio button
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    // To handle cancel button
    const handleCancel = () => {
        reset()
        console.log('cancelled');
    };
    return (

        <div>
            <DashBoard />
            <div className="flex justify-center bg-white md:p-8 rounded-lg w-full">
                <form className="md:border md w-full py-10" onSubmit={handleSubmit(onSubmit)}>
                <Title title="Customer"/>

                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="fname"
                                label="First Name"
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
                                name="mname"
                                label="Middle Name"
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
                                name="lname"
                                label="Last Name"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>

                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <label>Salutation</label>

                            <select {...register("sal", { required: true })}
                                id="sal"
                                name="sal"
                                label="Salutation"
                                className="w-full h-7 border mt-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none"
                                defaultValue="Choose"
                                register={register}>
                                <option value="">Select Salutation</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Dr.">Dr.</option>
                            </select>
                        </div>
                        <div className=" flex justify-around w-full md:w-1/3 px-2 mb-4 mt-6 ">
                            <label>
                                <input
                                    className=''
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={selectedValue === 'male'}
                                    onChange={handleChange}
                                    register={register} // Use register for React Hook Form integration
                                /> Male
                                <input
                                    className='ml-10'
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={selectedValue === 'female'}
                                    onChange={handleChange}
                                    register={register} // Use register for React Hook Form integration
                                /> Female
                                <input
                                    className='ml-10'
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={selectedValue === 'other'}
                                    onChange={handleChange}
                                    register={register} // Use register for React Hook Form integration
                                /> Other
                            </label>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="date"
                                name="dob"
                                label="Date of Birth"
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
                                name="occupation"
                                label="Occupation"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 arrow_none ">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="number"
                                name="aadhaar"
                                label="Aadhaar"
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
                                name="pan"
                                label="Pan Card"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required"
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <label>Other Id Name</label>
                            <select {...register("othidname")}
                                id="othidname"
                                name="othidname"
                                label="Other Id Name"
                                className="w-full h-7 border mt-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none"
                                defaultValue="Choose"
                                register={register}
                            >
                                <option value="">Choose</option>
                                <option value="Driving License">Driving License</option>
                                <option value="Voter Id">Voter Id</option>
                                <option value="Other id">OTHER</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 arrow_none" >
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="othid"
                                label="Other Id"
                                errors={errors}
                                register={register}

                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 arrow_none">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="number"
                                name="mob"
                                label="Mobile Number"
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
                                type="number"
                                name="phone"
                                label="Phone"
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
                                type="email"
                                name="email"
                                label="Email"
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
                                type="textarea"
                                name="address1"
                                label="Address1"
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
                                type="textarea"
                                name="address2"
                                label="Address2"
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
                                name="city"
                                label="City"
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
                                name="state"
                                label="State"
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
                                name="country"
                                label="Country"
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
                                type="number"
                                name="pin"
                                label="Pin Code"
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
                                name="description"
                                label="Description"
                                errors={errors}
                                register={register}

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
            </div >
        </div >
    );
}
export default Customer;