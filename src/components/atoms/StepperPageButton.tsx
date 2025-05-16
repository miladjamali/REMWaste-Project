import {FC} from "react";
import {styled} from "styled-components";
import {ReactSVG} from 'react-svg';
import {IStep} from "@/@types/skips";

const StyledButton = styled.div<{
    isActiveStep: boolean
}>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .line {
        margin-left: 24px;
        height: 2px;
        width: 64px;
        cursor: unset;
        background: ${props => props.isActiveStep ? '#0037c1' : '#9ca3af'};
    }

    .title-section {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            cursor: pointer;
            white-space: nowrap;
            margin-left: 8px;
        }

        svg {
            cursor: pointer;
            color: ${props => props.isActiveStep ? '#0037c1' : '#9ca3af'};
        }
    }
`

export const StepperPageButton: FC<
    {
        step: IStep,
        activeStep: number,
        stepsCount: number,
        onClick: () => void
    }
> = ({step, activeStep, stepsCount, onClick}) => {
    return (
        <StyledButton onClick={onClick} isActiveStep={activeStep >= step.id}>
            <div className='title-section'>
                <ReactSVG src={step.icon}/>
                <span>{step.name}</span>

            </div>
            {stepsCount === step.id ? null :
                <div className='line'></div>
            }
        </StyledButton>
    )
}