"use client"

import { FitContext } from '@/Context/FitContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const PlanPage = () => {

    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved
    } = useContext(FitContext);


    // Which tab is selected

    const [activeTab, setActiveTab] = useState("plan");


    // Sort option

    const [sortBy, setSortBy] = useState("duration");


    // Get value for sorting

    const getSortValue = (exercise) => {

        if (sortBy === "duration") {
            return parseFloat(exercise.duration) || 0;
        }

        if (sortBy === "calories") {
            return parseFloat(exercise.caloriesBurned) || 0;
        }

        if (sortBy === "rating") {
            return parseFloat(exercise.rating) || 0;
        }

        return 0;
    };


    // Sort Today's Plan

    const sortedPlan = [...plan].sort((a, b) => {

        const valueA = getSortValue(a);
        const valueB = getSortValue(b);


        // Duration: lowest to highest

        if (sortBy === "duration") {
            return valueA - valueB;
        }


        // Calories: highest to lowest
        // Rating: highest to lowest

        return valueB - valueA;
    });


    // Sort Saved

    const sortedSaved = [...saved].sort((a, b) => {

        const valueA = getSortValue(a);
        const valueB = getSortValue(b);


        // Duration: lowest to highest

        if (sortBy === "duration") {
            return valueA - valueB;
        }


        // Calories: highest to lowest
        // Rating: highest to lowest

        return valueB - valueA;
    });


    // Total minutes

    const totalMinutes = plan.reduce(
        (acc, current) => acc + (parseFloat(current.duration) || 0),
        0
    );


    // Total calories

    const totalCalories = plan.reduce(
        (acc, current) => acc + (parseFloat(current.caloriesBurned) || 0),
        0
    );


    return (
        <div className="min-h-screen bg-[#0d0f12] px-6 py-10 text-white lg:px-12">


            {/* Heading */}

            <div className="mb-6">

                <h1 className="text-3xl font-extrabold uppercase tracking-tight">
                    MY PLAN
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

            </div>



            {/* Stats */}

            <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-xl border border-[#292d35] bg-[#13161c] sm:grid-cols-3">


                {/* Exercises */}

                <div className="border-b border-[#292d35] px-6 py-7 sm:border-b-0 sm:border-r">

                    <p className="text-xs text-gray-500">
                        Exercises
                    </p>

                    <h2 className="mt-2 text-4xl font-extrabold text-lime-400">
                        {plan.length}
                    </h2>

                </div>



                {/* Minutes */}

                <div className="border-b border-[#292d35] px-6 py-7 sm:border-b-0 sm:border-r">

                    <p className="text-xs text-gray-500">
                        Minutes
                    </p>

                    <h2 className="mt-2 text-4xl font-extrabold text-white">
                        {totalMinutes}
                    </h2>

                </div>



                {/* Calories */}

                <div className="px-6 py-7">

                    <p className="text-xs text-gray-500">
                        Calories
                    </p>

                    <h2 className="mt-2 text-4xl font-extrabold text-white">
                        {totalCalories}
                    </h2>

                </div>

            </div>



            {/* Tabs + Sort */}

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">


                {/* Tabs */}

                <div className="flex w-fit rounded-xl border border-[#292d35] bg-[#13161c] p-1">


                    {/* Today's Plan */}

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                            activeTab === "plan"
                                ? "bg-[#242934] text-white"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        Today's Plan
                    </button>



                    {/* Saved */}

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                            activeTab === "saved"
                                ? "bg-[#242934] text-white"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>

                </div>



                {/* Sort By */}

                <div className="flex items-center gap-3">

                    <span className="text-xs text-gray-500">
                        Sort By
                    </span>


                    <div className="relative">

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none rounded-lg border border-[#292d35] bg-[#13161c] py-2 pl-3 pr-9 text-xs text-white outline-none focus:border-lime-400"
                        >

                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>

                        </select>


                        {/* Chevron */}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m6 9 6 6 6-6"
                            />
                        </svg>

                    </div>

                </div>

            </div>



            {/* ================= TODAY'S PLAN ================= */}

            {
                activeTab === "plan" && (

                    <div>

                        {
                            sortedPlan.length === 0 ? (

                                <div className="flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl border border-[#292d35] bg-[#13161c] p-10">

                                    <p className="text-center text-4xl font-semibold uppercase tracking-wider text-gray-500">
                                        NOTHING HERE YET
                                    </p>

                                    <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
                                        Browse the library and add a lift to get today moving.
                                    </p>

                                    <Link
                                        href="/exercises"
                                        className="btn mt-5 rounded-full border-none bg-lime-400 px-6 text-sm font-bold text-black hover:bg-lime-300"
                                    >
                                        BROWSE WORKOUTS
                                    </Link>

                                </div>

                            ) : (

                                <div className="space-y-4">

                                    {
                                        sortedPlan.map(exercise => (

                                            <div
                                                key={exercise.id}
                                                className="flex flex-col gap-5 rounded-xl border border-[#292d35] bg-[#13161c] p-4 sm:flex-row sm:items-center"
                                            >


                                                {/* Image */}

                                                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-36">

                                                    <Image
                                                        src={exercise.image}
                                                        alt={exercise.name}
                                                        fill
                                                        className="object-cover"
                                                    />

                                                </div>



                                                {/* Exercise Information */}

                                                <div className="flex-1">

                                                    <div className="mb-2 flex flex-wrap gap-2">

                                                        {
                                                            exercise.muscleGroups.map(muscle => (

                                                                <span
                                                                    key={muscle}
                                                                    className="rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold uppercase text-black"
                                                                >
                                                                    {muscle}
                                                                </span>

                                                            ))
                                                        }

                                                    </div>


                                                    <h2 className="text-lg font-bold uppercase text-white">
                                                        {exercise.name}
                                                    </h2>


                                                    <p className="text-xs text-gray-500">
                                                        {exercise.equipment}
                                                    </p>


                                                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-400">

                                                        <span>
                                                            ◷ {exercise.duration} min
                                                        </span>

                                                        <span>
                                                            🔥 {exercise.caloriesBurned} kcal
                                                        </span>

                                                        <span className="text-lime-400">
                                                            ☆ {exercise.rating}
                                                        </span>

                                                    </div>

                                                </div>



                                                {/* Buttons */}

                                                <div className="flex flex-wrap items-center gap-3">

                                                    <Link
                                                        href={`/exercises/${exercise.id}`}
                                                        className="rounded-full border border-[#3a3f49] px-4 py-2 text-xs text-gray-300 hover:border-lime-400 hover:text-lime-400"
                                                    >
                                                        View Details
                                                    </Link>


                                                    <button
                                                        onClick={() => removeFromPlan(exercise.id)}
                                                        className="rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black hover:bg-lime-300"
                                                    >
                                                        ✓ Mark as Done
                                                    </button>


                                                    <button
                                                        onClick={() => removeFromPlan(exercise.id)}
                                                        className="px-2 text-lg text-gray-500 hover:text-white"
                                                    >
                                                        ×
                                                    </button>

                                                </div>

                                            </div>

                                        ))
                                    }

                                </div>

                            )
                        }

                    </div>

                )
            }



            {/* ================= SAVED ================= */}

            {
                activeTab === "saved" && (

                    <div>

                        {
                            sortedSaved.length === 0 ? (

                                <div className="flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl border border-[#292d35] bg-[#13161c] p-10">

                                    <p className="text-center text-4xl font-semibold uppercase tracking-wider text-gray-500">
                                        NOTHING HERE YET
                                    </p>

                                    <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
                                        Browse the library and save a lift for later.
                                    </p>

                                    <Link
                                        href="/exercises"
                                        className="btn mt-5 rounded-full border-none bg-lime-400 px-6 text-sm font-bold text-black hover:bg-lime-300"
                                    >
                                        BROWSE WORKOUTS
                                    </Link>

                                </div>

                            ) : (

                                <div className="space-y-4">

                                    {
                                        sortedSaved.map(exercise => (

                                            <div
                                                key={exercise.id}
                                                className="flex flex-col gap-5 rounded-xl border border-[#292d35] bg-[#13161c] p-4 sm:flex-row sm:items-center"
                                            >


                                                {/* Image */}

                                                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-36">

                                                    <Image
                                                        src={exercise.image}
                                                        alt={exercise.name}
                                                        fill
                                                        className="object-cover"
                                                    />

                                                </div>



                                                {/* Exercise Information */}

                                                <div className="flex-1">

                                                    <div className="mb-2 flex flex-wrap gap-2">

                                                        {
                                                            exercise.muscleGroups.map(muscle => (

                                                                <span
                                                                    key={muscle}
                                                                    className="rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold uppercase text-black"
                                                                >
                                                                    {muscle}
                                                                </span>

                                                            ))
                                                        }

                                                    </div>


                                                    <h2 className="text-lg font-bold uppercase text-white">
                                                        {exercise.name}
                                                    </h2>


                                                    <p className="text-xs text-gray-500">
                                                        {exercise.equipment}
                                                    </p>


                                                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-400">

                                                        <span>
                                                            ◷ {exercise.duration} min
                                                        </span>

                                                        <span>
                                                            🔥 {exercise.caloriesBurned} kcal
                                                        </span>

                                                        <span className="text-lime-400">
                                                            ☆ {exercise.rating}
                                                        </span>

                                                    </div>

                                                </div>



                                                {/* Buttons */}

                                                <div className="flex items-center gap-3">

                                                    <Link
                                                        href={`/exercises/${exercise.id}`}
                                                        className="rounded-full border border-[#3a3f49] px-4 py-2 text-xs text-gray-300 hover:border-lime-400 hover:text-lime-400"
                                                    >
                                                        View Details
                                                    </Link>


                                                    <button
                                                        onClick={() => removeFromSaved(exercise.id)}
                                                        className="px-2 text-lg text-gray-500 hover:text-white"
                                                    >
                                                        ×
                                                    </button>

                                                </div>

                                            </div>

                                        ))
                                    }

                                </div>

                            )
                        }

                    </div>

                )
            }

        </div>
    );
};

export default PlanPage;