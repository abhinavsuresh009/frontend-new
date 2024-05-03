import React from 'react';
import { ClassNames } from '../../styles/style';
import Input from '../../components/Input';
import { useForm } from "react-hook-form"
function PaymentForm(props) {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const classes = 'form-control mt-1 flex justify-between ps-2 w-full md:w-1/2 flex-col md:flex-row'
    return (
        <div className='flex justify-center mt-5'>
             <section className='md:border md:w-3/4 w-full p-2'>
             <div className={classes}>
                        <label className={ClassNames.labelClass}>
                               Transaction Type</label>    
                                <select>
                                <option>Choose a </option>
                                    <option>Payment</option>
                                    <option>Reciept</option>
                                    
                                </select>
            </div>
            <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Header</label>    
                                <select>
                                    <option>Cash withdraw</option>
                                    <option>Cash withdraw</option>
                                    <option>Cash withdraw</option>
                                </select>
            </div>
            <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Bank</label>    
                                <select>
                                    <option>Choose</option>
                                    <option>Catholic Syrian Bank</option>
                                    <option>Cash withdraw</option>
                                </select>
            </div>
            <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Account Type</label>    
                                <select>
                                    <option>Cash withdraw</option>
                                    <option>Cash withdraw</option>
                                    <option>Cash withdraw</option>
                                </select>
            </div>
            <div className={classes}>
                        <label className={ClassNames.labelClass}>
                                Date</label>    
                        <Input
                        type="date"
                        name="date"
                        // label="Amount"
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
                        <label className={ClassNames.labelClass}>
                                Account No</label>    
                        <Input
                        type="text"
                        name="accno"
                        // label="Amount"
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
                        <label className={ClassNames.labelClass}>
                                Cheque No</label>    
                        <Input
                        type="text"
                        name="accno"
                        // label="Amount"
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
                        <label className={ClassNames.labelClass}>
                                Amount</label>    
                        <Input
                        type="text"
                        name="amnt"
                        // label="Amount"
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
                        <label className={ClassNames.labelClass}>
                                Party Name</label>    
                        <Input
                        type="text"
                        name="party_name"
                        // label="Amount"
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
            </section>
        </div>
    );
}

export default PaymentForm;