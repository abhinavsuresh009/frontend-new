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
    const [successMessage, setSuccessMessage] = useState()
    const { baseurl, comcode, brcode, ucode, gcode } = useContext(AppContext)
    const [showOtherIdNumber, setShowOtherIdNumber] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [isValidComcode, setIsValidComcode] = useState(true); // State to track if comcode is valid
    const url = `${baseurl}/customer/register-customer/`;
    const {
        register,
        setError,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();    // to generate random cusid

    const generateUniqueId = () => {
        const randomNumber = Math.random().toString(36).substr(2, 6);
        return `${randomNumber}`;
    };
    //  reset form 
    const handleCancel = () => {
        setSelectedValue('');
        setShowOtherIdNumber(false);
        setHouseType('');
        reset();
    };


    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`${baseurl}/placecode/countries/`);
                if (response.ok) {
                    const data = await response.json();
                    setCountries(data.data);
                } else {
                    throw new Error('Failed to fetch countries');
                }
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, [baseurl]); // Ensure useEffect runs only when baseurl changes

    const onSelectCountry = async (countryCode) => {
        try {
            setSelectedCountry(countryCode); // Update selected country
            const response = await fetch(`${baseurl}/placecode/state/`);
            if (response.ok) {
                const data = await response.json();
                // Filter states based on selected country code
                const filteredStates = data.data.filter(state => state.country_code === countryCode);
                setStates(filteredStates); // Update states with filtered states
            } else {
                throw new Error('Failed to fetch states');
            }
        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };
    const onSelectState = async (stateCode) => {
        setSelectedState(stateCode);
        try {
            const response = await fetch(`${baseurl}/placecode/cities/`);
            if (response.ok) {
                const data = await response.json();
                const filteredCities = data.data.filter(city => city.state_code === stateCode);
                setCities(filteredCities);
            } else {
                throw new Error('Failed to fetch cities');
            }
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const onSubmit = async (data) => {
        try {
            const cusid = generateUniqueId()
            data.cusid = cusid;
            data.gender = selectedValue;
            data.ownhouse = houseType;
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
            })
            const result = await response.json();

            if (response.status === 400) {
                console.log('error', result.error)
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
                setShowOtherIdNumber(false);


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
                    {successMessage && open && <AlertMessage open={open} setOpen={setOpen} message={successMessage} />}
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
                                >
                                <option value="">Select Salutation</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Dr.">Dr.</option>
                            </select>
                            {errors.sal && <p className="text-red-500 text-xs italic">This field is required</p>}
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
                            {errors.gender && <p className="text-red-500 text-xs italic">Please select a gender</p>}
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
                            {errors.dob && <p className="text-red-500 text-xs italic">Please select your Date of birth</p>}
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
                        <div className="w-full md:w-1/3 px-2 mb-4 arrow_none flex ">
                            <Input
                                style={{ textAlign: 'left' }}
                                type="number"
                                name="aadhaar"
                                label="Aadhaar"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "This field is required",
                                    maxLength: {
                                        value: 14,
                                        message: "Aadhaar should contain 14 numbers"
                                    },
                                    minLength: {
                                        value: 14,
                                        message: "Aadhaar should contain 14 numbers"
                                    }
                                }}
                                required
                            />
                            {(errors.aadhaar && errors.aadhaar.type === 'maxLength') && (errors.aadhaar && errors.aadhaar.type === 'minLength') && (
                                <span className='text-red-500 text-xs italic'>
                                    {errors.aadhaar.message}
                                </span>
                            )}
                            <button
                                type="button"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold w-20 text-center h-8 mt-6"
                            > Verify
                            </button>
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
                                {...register("othidname")}
                                className="form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1 rounded"
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
                                {errors.othid && <p className="text-red-500 text-xs italic">This field is required</p>}
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
                                    value="ownhouse"
                                    checked={houseType === 'ownhouse'}
                                    onChange={handleSelectionChange}
                                /> Own House
                                <input
                                    className='ml-10'
                                    type="radio"
                                    {...register("ownhouse", { required: true })}
                                    value="rentedhouse"
                                    checked={houseType === 'rentedhouse'}
                                    onChange={handleSelectionChange}
                                /> Rented House
                            </label>
                            {errors.ownhouse && <p className="text-red-500 text-xs italic">Please select your house type</p>}
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
                            {errors.address1 && errors.address1.type === 'maxLength' && (
                                <span className='text-red-500 text-xs italic'>
                                    {errors.address1.message}
                                </span>
                            )}

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
                            {errors.address2 && errors.address2.type === 'maxLength' && (
                                <span className='text-red-500 text-xs italic'>
                                    {errors.address2.message}
                                </span>
                            )}
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <label>Country</label>
                            <select 
                                {...register("country", { required: true })}
                                className="overflow-scroll form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1 rounded"
                                onChange={(e) => onSelectCountry(e.target.value)} // Pass selected country code
                            >
                                <option value="">Select Country</option>
                                {countries.map(country => (
                                    <option key={country.country_code} value={country.country_code}>
                                        {country.country_code} - {country.country_name}
                                    </option>
                                ))}
                            </select>
                            {errors.country && <p className="text-red-500 text-xs italic">This field is required</p>}

                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <label>State Code</label>
                            <select {...register("state", { required: true })}
                                
                                className="overflow-scroll form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1 rounded"
                                onChange={(e) => onSelectState(e.target.value)}
                            >
                                <option value="">Select State</option>
                                {states
                                    .filter(state => state.country_code === selectedCountry)
                                    .map(state => (
                                        <option key={state.state_code} value={state.state_code}>
                                            {state.state_code} - {state.state_name}
                                        </option>
                                    ))}
                            </select>
                            {errors.state && <p className="text-red-500 text-xs italic">This field is required</p>}
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <label>City</label>
                            <select {...register("city", { required: true })}
                                
                                className="overflow-scroll form-control text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none w-full h-6.8 mt-1 rounded"
                            >
                                <option value="">Select City</option>
                                {cities
                                    .filter(city => city.country_code === selectedCountry && city.state_code === selectedState)
                                    .map(city => (
                                        <option key={city.city_code} value={city.city_code}>
                                            {city.city_code} - {city.city_name}
                                        </option>
                                    ))}
                            </select>
                            {errors.city && <p className="text-red-500 text-xs italic">This field is required</p>}

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