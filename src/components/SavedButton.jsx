"use client"

import { FitContext } from '@/Context/FitContext';
import React, { useContext } from 'react';

const SavedButton = ({ exercise }) => {

    const { saved, addToSaved } = useContext(FitContext);

    const alreadySaved = saved.some(
        item => item.id === exercise.id
    );


    return (
        <button
            onClick={() => addToSaved(exercise)}
            disabled={alreadySaved}
            className={`btn text-xs ${
                alreadySaved
                    ? "border-gray-700 bg-gray-700 text-gray-400"
                    : "border border-[#343840] bg-transparent text-gray-300 hover:border-lime-400 hover:bg-transparent hover:text-lime-400"
            }`}
        >
            {alreadySaved
                ? "✓ Saved"
                : "♡ Save for later"
            }
        </button>
    );
};

export default SavedButton;