import {FC, useState} from "react";
import {styled} from "styled-components";
import {StepperPageButton} from '../atoms/StepperPageButton';
import {IStep} from "@/@types/skips";
import {StepperFooter} from "@/components";

const StepperContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .scrollable {

        .steps-header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 20px;
            gap: 20px;
        }
    }

    .step-body-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;

        .step {
            display: none;

            &.active {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                margin-top: 50px;
            }
        }
    }

`

export const Stepper: FC<
    { steps: IStep[] }
> = ({steps}) => {
    const [activeStep, setActiveStep] = useState(3);

    return (
        <StepperContainer>
            <div className='scrollable'>
                <div className={'steps-header'}>
                    {steps.map((step, index) => (
                            <StepperPageButton key={index} step={step} activeStep={activeStep} stepsCount={steps.length}
                                               onClick={() => {
                                                   setActiveStep(index + 1)
                                               }}/>
                        )
                    )}
                </div>
            </div>
            <div className='step-body-container'>
                {steps.map((step, index) => (
                    <div key={index} className={`step ${activeStep === index + 1 ? 'active' : ''}`}>
                        <h1>{step.title}</h1>
                        {step.body}
                    </div>
                ))}
            </div>
            <div>
                <StepperFooter/>
            </div>
        </StepperContainer>
    )
}