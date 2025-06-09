import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Box
} from '@mui/material';

import {
    Home as AddressIcon,
    DeleteSweep as GardenWasteIcon,
    Inventory2 as SkipIcon,
    Gavel as PermitIcon,
    Event as DateIcon,
    Payment as PaymentIcon,
} from '@mui/icons-material';

const steps = [
    { label: 'Address', icon: <AddressIcon fontSize='large' /> },
    { label: 'Waste Type', icon: <GardenWasteIcon fontSize='large' /> },
    { label: 'Select Skip', icon: <SkipIcon fontSize='large' /> },
    { label: 'Permit Check', icon: <PermitIcon fontSize='large' /> },
    { label: 'Choose Date', icon: <DateIcon fontSize='large' /> },
    { label: 'Payment', icon: <PaymentIcon fontSize='large' /> },
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