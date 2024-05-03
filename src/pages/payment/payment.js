import React from 'react';
import PaymentForm from './paymentform';
import DashBoard from '../../components/DashBoard';
function Payment(props) {
    return (
        <div>
           <DashBoard />
            <PaymentForm />
        </div>
    );
}

export default Payment;