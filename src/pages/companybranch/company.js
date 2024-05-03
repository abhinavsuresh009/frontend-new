import React from 'react';
import CompanyForm from './companyform';
import DashBoard from '../../components/DashBoard';
function Company(props) {
    return (
        <div>
            <DashBoard />
            <CompanyForm />
        </div>
    );
}

export default Company;