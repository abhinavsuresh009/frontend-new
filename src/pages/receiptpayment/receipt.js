import React from 'react';
import DashBoard from '../../components/DashBoard';
import ReceiptPayment from './receiptform';

function Receipt(props) {
    return (
        <div>
            <DashBoard />
            <ReceiptPayment/>
        </div>
    );
}
export default Receipt;