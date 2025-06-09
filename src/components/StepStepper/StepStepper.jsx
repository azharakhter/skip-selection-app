import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Box
} from '@mui/material';
import {
    AddressIcon,
    GardenWasteIcon,
    SkipIcon
} from './StepIcons';

const steps = [
    { label: 'Address', icon: <AddressIcon /> },
    { label: 'Waste Type', icon: <GardenWasteIcon /> },
    { label: 'Skip Size', icon: <SkipIcon /> },
];

const StepStepper = ({ activeStep }) => {
    return (
        <Box sx={{ width: '100%', mb: 6 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step, index) => (
                    <Step key={step.label} completed={index < activeStep}>
                        <StepLabel
                            StepIconComponent={() => (
                                <Box sx={{
                                    color: index <= activeStep ? 'primary.main' : 'action.disabled',
                                    fontSize: '2rem'
                                }}>
                                    {step.icon}
                                </Box>
                            )}
                        >
                            <Box sx={{
                                fontWeight: index === activeStep ? 'bold' : 'normal',
                                color: index === activeStep ? 'primary.main' : 'text.secondary'
                            }}>
                                {step.label}
                            </Box>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default StepStepper;