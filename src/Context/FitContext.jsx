"use client"

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FitContext = createContext();

const FitProvider = ({ children }) => {

    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);


    // Add to Today's Plan
    const addToPlan = (exercise) => {

        if (plan.some(item => item.id === exercise.id)) {
            return;
        }

        setPlan([...plan, exercise]);
        toast.success("Exercise Added!");
    };


    // Remove from Today's Plan
    const removeFromPlan = (id) => {

        setPlan(
            plan.filter(exercise => exercise.id !== id)
        );
    };


    // Add to Saved
    const addToSaved = (exercise) => {

        if (saved.some(item => item.id === exercise.id)) {
            return;
        }

        setSaved([...saved, exercise]);
        toast.success("Exercise Saved!");
    };


    // Remove from Saved
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