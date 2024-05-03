import React from 'react';
import BranchForm from './branchform';
import DashBoard from '../../components/DashBoard';

function Branch(props) {
    return (
        <div>
           
            <DashBoard />
            <BranchForm />
        </div>
    );
}

export default Branch;