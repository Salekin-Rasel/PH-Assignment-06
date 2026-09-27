"use client"
import { FitContext } from '@/Context/FitContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({exercise}) => {

    const {saved, setSaved} = useContext(FitContext)

    const handleSavedButton = ()=>{
        setSaved([...saved, exercise])
        toast.success("Exercise saved!");
        
    }
    return (
        <button className="btn border border-[#343840] bg-transparent text-xs text-gray-300 hover:border-lime-400 hover:bg-transparent hover:text-lime-400"
        onClick={()=>handleSavedButton()}>
            ♡ Save for later
          </button>
    );
};

export default SavedButton;