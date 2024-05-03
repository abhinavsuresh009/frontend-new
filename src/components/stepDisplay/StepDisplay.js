import { LoanContext } from "../../context/loanContext";
import LoanProvider from "../../context/loanContext";
import GoldDetails from "../../pages/goldloan/golddetails";
import GoldLoanForm from '../../pages/goldloan/goldloanform'
import GoldLoanAppForm from "../../pages/goldloanapplication/goldloanappform";
import React from 'react';
const StepDisplay = ({ step, currentStep, setCurrentStep, backGoldData, onSubmit }) => {
    const [formData, setFormData] = React.useState({
        step1: "",
        step2: "",
        step3: "",
      });
    switch (step) {
        case 1:
            return (
                <LoanProvider>
                    <GoldLoanAppForm
                       formData={formData}
                       setFormData={setFormData}
                        backGoldData={backGoldData}
                    />
                </LoanProvider>
            );
        case 2:
            return (
                <LoanProvider>
                    <GoldLoanForm
                         formData={formData}
                         setFormData={setFormData}
                        backGoldData={backGoldData}
                        onSubmit={onSubmit}
                    />
                </LoanProvider>
            );
        case 3:
            return (
                <LoanProvider>
                    <GoldDetails
                         formData={formData}
                         setFormData={setFormData}
                        backGoldData={backGoldData}
                    />
                </LoanProvider>
            );
        default:
            return null; // If step doesn't match any case, return null or handle default case accordingly
    }
};

export default StepDisplay;