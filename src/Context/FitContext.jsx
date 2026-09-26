"use client"
import React, { createContext, useState } from 'react';

export const FitContext = createContext({})

const FitProvider = ({children}) => {

    const [plan, setPlan] = useState([])
    const [saved, setSaved] = useState([])

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved
    }

    return (
        <FitContext.Provider value={sharedData}>{children}</FitContext.Provider>
    );
};

export default FitProvider;