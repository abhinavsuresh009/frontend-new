import React from 'react';
import DashBoard from '../../components/DashBoard';
import BankForm from './bankentryform';

function BankEntry(props) {
    return (
        <div>
           
            <DashBoard />
            <BankForm />
        </div>
    );
}

export default BankEntry;