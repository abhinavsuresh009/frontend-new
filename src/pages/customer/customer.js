import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
import DashBoard from '../../components/DashBoard';
import Input from '../../components/Input';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';
import DateOfBirthPicker from '../../components/DobInput';
import AlertMessage from '../../components/alert/Alert';


function Customer(props) {
    const [selectedValue, setSelectedValue] = useState('');
    const [houseType, setHouseType] = useState('');
    const [open, setOpen] = useState(false) 
    const [otherId, setOtherId] = useState("");
    const [successMessage, setSuccessMessage] = useState()
    const { baseurl, comcode, brcode } = useContext(AppContext)
    const [showOtherIdNumber, setShowOtherIdNumber] = useState(false);
    
    const url = `${baseurl}/customer/register-customer/`;
    const {
        register,
        setError,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // to generate random cusid
    const selectedOtherId = watch("othidname");
    const generateUniqueId = () => {
        const randomNumber = Math.random().toString(36).substr(2, 6);
        return `${randomNumber}`;
    };
    //  reset form 
    const handleCancel = () => {
        setSelectedValue('');
        setHouseType('');
        reset();
    };

    const onSubmit = async (data) => {
        try {
            const cusid = generateUniqueId()
            data.cusid = cusid;
            data.gender = selectedValue;
            data.ownhouse = houseType;
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
    // To handle radio button
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleSelectionChange = (event) => {
        setHouseType(event.target.value);
    };  
    useEffect(() => {
        // Hide Other Id Number field when page loads
        setShowOtherIdNumber(false);
    }, []);  
    return (

        <div>
            <DashBoard />
            <div className="flex justify-center bg-white md:p-8 rounded-lg w-full">
                <form className="md:border md w-full py-10" onSubmit={handleSubmit(onSubmit)}>
                    <Title title="Customer" />
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage}/>}
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
                            <label >Salutation</label>

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
                        <div className="w-full md:w-1/3 px-2 mb-4 mt-6 ">
                            <label >
                                <input
                                    className=''
                                    type="radio"
                                    {...register("gender", { required: true })}
                                    value="male"
                                    checked={selectedValue === 'male'}
                                    onChange={handleChange}
                                /> Male
                                <input
                                    className='ml-10'
                                    type="radio"
                                    {...register("gender", { required: true })}
                                    value="female"
                                    checked={selectedValue === 'female'}
                                    onChange={handleChange}
                                /> Female
                                <input
                                    className='ml-10'
                                    type="radio"
                                    {...register("gender", { required: true })}
                                    value="other"
                                    checked={selectedValue === 'other'}
                                    onChange={handleChange}
                                    
                                /> Other
                            </label>
                            {errors.gender && <p className="text-red-500 text-xs">Please select a gender</p>}
                        </div>
                        

                        <div className="w-full md:w-1/3 px-2 mb-4">
                           
                            <DateOfBirthPicker
                                style={{ textAlign: 'left' }}
                                name="dob"
                                label="Date of Birth"
                                errors={errors}
                                register={register}

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
                            <label>Other Id</label>
                            <select
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1 rounded"
                                {...register("othidname")}
                                defaultValue=""
                                onClick={() => setShowOtherIdNumber(watch("othidname") !== "")}
                            >
                                <option value="">Choose</option>
                                <option value="Driving License">Driving License</option>
                                <option value="Voter Id">Voter Id</option>
                                <option value="Other id">Other</option>
                            </select>
                        </div>
                        {/* Conditionally render Other Id Number input field */}
                        {showOtherIdNumber && (
                            <div className='w-full md:w-1/3 px-2 mb-4'>
                                <label>Other Id Number</label>
                                <input
                                    type="text"
                                    className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.5 mt-1 rounded"
                                    {...register("othid", { required: true })}
                                />
                                {errors.othid && <p className="text-red-500 text-xs">This field is required</p>}
                            </div>
                        )}

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
                        <div className="w-full md:w-1/3 px-2 mb-4 mt-6 ">
                            <label> 
                                <input
                                    type="radio"
                                    {...register("ownhouse", { required: true })}
                                    value="own"
                                    checked={houseType === 'own'}
                                    onChange={handleSelectionChange}
                                /> Own House
                                <input
                                className='ml-10'
                                    type="radio"
                                    {...register("ownhouse", { required: true })}
                                    value="rented"
                                    checked={houseType === 'rented'}
                                    onChange={handleSelectionChange}
                                /> Rented House
                            </label>
                            {errors.gender && <p className="text-red-500 text-xs">Please select your house type</p>}
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="address1"
                                label="Address(Building No./House No./etc.)"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required",
                                    maxLength: {
                                        value: 50,
                                        message: "Only contain maximum of 50 characters"
                                    }
                                }}
                                required
                            />
                        {errors.address1 && <span className='text-red-500 text-xs italic'>{errors.address1.message}</span>}
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="text"
                                name="address2"
                                label="Address(Landmark/Road/etc.)"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required",
                                    maxLength: {
                                        value: 50,
                                        message: "Only contain maximum of 50 characters"
                                    }
                                }}
                                required
                            />
                        {errors.address2 && <span className='text-red-500 text-xs italic'>{errors.address1.message}</span>}
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
                                label="Description (optional)"
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