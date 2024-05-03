import React from 'react';
import CompanyForm from './companyform';
import DashBoard from '../../components/DashBoard';
import CompanyDetails from './companydetailsform';
function Company(props) {
    return (
        <div>
            <DashBoard />
            <CompanyDetails />
            
        </div>
    );
}

export default Company;