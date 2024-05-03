import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import StepDisplay from "../stepDisplay/StepDisplay";
import { useForm } from "react-hook-form"
export function DefaultStepper() {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
      } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  let [currentStep, setCurrentStep] = React.useState(1)
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
    
 
  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
       activeLineClassName="bg-green-700"
      >
        <Step activeClassName="bg-blue-500"
        completedClassName="bg-green-700"
       
         onClick={() => setActiveStep(0)}>1</Step>
        <Step activeClassName="bg-blue-500"
        completedClassName="bg-green-700" onClick={() => setActiveStep(1)}>2</Step>
        <Step activeClassName="bg-blue-500"
        completedClassName="bg-green-700" onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <StepDisplay step={currentStep}/>
      <div className="mt-16 flex justify-between">
        <Button onClick={()=>{handlePrev();setCurrentStep(prev => prev - 1)}} disabled={isFirstStep}>
          Prev
        </Button>
        <Button type='submit' onClick={()=>{handleNext();setCurrentStep(prev => prev + 1);}} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}