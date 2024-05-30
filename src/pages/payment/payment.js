import React from 'react';
import DashBoard from '../../components/DashBoard';
import Payment from './paymentform';
function Payments(props){
    return (
        <div>
            <DashBoard/>
            <Payment/>
        </div>
    );
}
export default Payments;