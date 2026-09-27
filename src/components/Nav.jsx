"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { FitContext } from '@/Context/FitContext';

const Nav = () => {

    const pathname = usePathname();

    const {
        plan,
        saved
    } = useContext(FitContext);


    // Workouts selected on:
    // Home
    // Exercises
    // Exercise details

    const workoutSelected =
        pathname === "/" ||
        pathname.startsWith("/exercises");


    // My Plan selected only on /Plan

    const planSelected =
        pathname === "/Plan";


    const link = <>

        <Link
            href="/exercises"
            className={`rounded-md px-4 py-2 ${
                workoutSelected
                    ? "bg-[#252525] text-lime-400"
                    : "text-gray-300 hover:bg-[#252525] hover:text-lime-400"
            }`}
        >
            <li>Workouts</li>
        </Link>


        <Link
            href="/Plan"
            className={`rounded-md px-4 py-2 ${
                planSelected
                    ? "bg-[#252525] text-lime-400"
                    : "text-gray-300 hover:bg-[#252525] hover:text-lime-400"
            }`}
        >
            <li>My-Plan</li>
        </Link>

    </>


    return (
        <div className="navbar border-b border-[#252525] bg-[#111111] px-4 lg:px-8">


            {/* Left */}

            <div className="navbar-start">


                {/* Mobile menu */}

                <div className="dropdown">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost text-white lg:hidden"
                    >

                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>

                    </div>


                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-[#181818] p-2 text-white shadow-lg"
                    >
                        {link}
                    </ul>

                </div>


                {/* Logo */}

                <Image
                    src="/logo.png"
                    alt="logo"
                    width={45}
                    height={40}
                    className="object-contain"
                />


                {/* Brand name */}

                <Link
                    href="/"
                    className="btn btn-ghost text-xl font-bold text-white hover:bg-transparent"
                >
                    FIT<span className="text-lime-400">LOG</span>
                </Link>

            </div>



            {/* Center navigation */}

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal gap-2 px-1">

                    {link}

                </ul>

            </div>



            {/* Right */}

            <div className="navbar-end gap-3">


                {/* Plan */}

                <Link
                    href="/Plan"
                    className={`flex items-center gap-2 rounded-md px-3 py-2 ${
                        planSelected
                            ? "bg-[#252525] text-lime-400"
                            : "bg-[#181818] text-white hover:text-lime-400"
                    }`}
                >
                    <span>Plan</span>

                    <span className="rounded-full bg-lime-400 px-2 py-0.5 text-xs font-bold text-black">
                        {plan.length}
                    </span>
                </Link>



                {/* Saved */}

                <Link
                    href="/Plan"
                    className="flex items-center gap-2 rounded-md bg-[#181818] px-3 py-2 text-white hover:text-lime-400"
                >
                    <span>Saved</span>

                    <span className="rounded-full bg-[#252525] px-2 py-0.5 text-xs font-bold text-gray-300">
                        {saved.length}
                    </span>
                </Link>


            </div>

        </div>
    );
};

export default Nav;