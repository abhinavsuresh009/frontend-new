import React from 'react';
import GoldRateForm from './goldrateform';
import DashBoard from '../../components/DashBoard';

function GoldRate(props) {
    return (
        <div>
            <DashBoard />
            <GoldRateForm />
        </div>
    );
}

export default GoldRate;