"use client"
import { FitContext } from '@/Context/FitContext';
import React, { useContext } from 'react';

const SavedButton = ({exercise}) => {

    const {saved, setSaved} = useContext(FitContext)

    const handleReadButton = ()=>{
        setSaved([...saved, exercise])
        
    }
    return (
        <button className="btn border-none bg-lime-400 text-xs font-bold text-black hover:bg-lime-300"
        onClick={()=>handleReadButton()}>
            + Add to today's plan
          </button>
    );
};

export default SavedButton;