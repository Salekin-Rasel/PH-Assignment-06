"use client"
import { FitContext } from '@/Context/FitContext';
import React, { useContext } from 'react';

const ReadButton = ({exercise}) => {

    const {plan, setPlan} = useContext(FitContext)

    const handleReadButton = ()=>{
        setPlan([...plan, exercise])
        
    }
    return (
        <button className="btn border-none bg-lime-400 text-xs font-bold text-black hover:bg-lime-300"
        onClick={()=>handleReadButton()}>
            + Add to today's plan
          </button>
    );
};

export default ReadButton;