"use client"

import { createContext, useState } from "react";

export const FitContext = createContext();

const FitProvider = ({ children }) => {

    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);


    // Add exercise to today's plan
    const addToPlan = (exercise) => {

        if (plan.some(item => item.id === exercise.id)) {
            return;
        }

        setPlan([...plan, exercise]);
    };


    // Remove exercise from today's plan
    const removeFromPlan = (id) => {
        setPlan(
            plan.filter(exercise => exercise.id !== id)
        );
    };


    // Add exercise to saved
    const addToSaved = (exercise) => {

        if (saved.some(item => item.id === exercise.id)) {
            return;
        }

        setSaved([...saved, exercise]);
    };


    // Remove exercise from saved
    const removeFromSaved = (id) => {
        setSaved(
            saved.filter(exercise => exercise.id !== id)
        );
    };


    return (
        <FitContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                addToSaved,
                removeFromSaved
            }}
        >
            {children}
        </FitContext.Provider>
    );
};

export default FitProvider;