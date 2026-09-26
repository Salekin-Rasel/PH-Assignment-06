"use client"
import { FitContext } from '@/Context/FitContext';
import React, { useContext } from 'react';

const PlanPage = () => {

    const {plan, saved} = useContext(FitContext)
    return (
        <div>
            {plan.length}
            {saved.length}
        </div>
    );
};

export default PlanPage;