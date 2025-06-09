import React, { createContext, useState, useContext } from 'react';

const SelectionContext = createContext();

export function SelectionProvider({ children }) {
    const [selectedSkip, setSelectedSkip] = useState(null);
    const [step, setStep] = useState(2); // Start at step 2 for skip selection
    const [userLocation, setUserLocation] = useState({
        postcode: 'NR32',
        area: 'Lowestoft'
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => Math.max(s - 1, 0));

    return (
        <SelectionContext.Provider
            value={{
                selectedSkip,
                setSelectedSkip,
                step,
                nextStep,
                prevStep,
                userLocation,
                setUserLocation
            }}
        >
            {children}
        </SelectionContext.Provider>
    );
}

export const useSelection = () => useContext(SelectionContext);