"use client"

import { FitContext } from '@/Context/FitContext';
import React, { useContext } from 'react';

const ReadButton = ({ exercise }) => {

    const { plan, addToPlan } = useContext(FitContext);

    const alreadyAdded = plan.some(
        item => item.id === exercise.id
    );


    return (
        <button
            onClick={() => addToPlan(exercise)}
            disabled={alreadyAdded}
            className={`btn text-xs font-bold ${
                alreadyAdded
                    ? "bg-gray-700 text-gray-400"
                    : "border-none bg-lime-400 text-black hover:bg-lime-300"
            }`}
        >
            {alreadyAdded
                ? "✓ Added to today's plan"
                : "+ Add to today's plan"
            }
        </button>
    );
};

export default ReadButton;