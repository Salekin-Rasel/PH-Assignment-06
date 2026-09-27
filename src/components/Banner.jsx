import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (

        <div className="container mx-20 my-6 flex min-h-[500px] flex-col items-center justify-between gap-10 rounded-2xl bg-[#15171D] px-6 py-12 sm:mt-8 sm:px-8 md:mt-10 md:px-12 lg:mt-20 lg:min-h-[500px] lg:flex-row lg:px-16 lg:py-16">


            {/* Left side */}

            <div className="w-full max-w-2xl text-center lg:text-left">

                <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-lime-400">
                    WORKOUT LIBRARY
                </p>


                <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    TRAIN WITH INTENT. LOG
                    <br className="hidden sm:block" />
                    EVERY SET.
                </h1>


                <p className="mb-8 text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                    FitLog is a dark, no-nonsense gym companion: pick a lift,
                    lock it into today's plan, and watch the week's work add up.
                </p>


                <Link
                    href="/exercises"
                    className="btn border-none bg-lime-400 px-6 text-sm font-bold text-black hover:bg-lime-300"
                >
                    BROWSE WORKOUTS
                </Link>

            </div>



            {/* Right side */}

            <div className="w-full lg:w-auto">

                <Image
                    src="/banner.png"
                    alt="banner"
                    width={400}
                    height={500}
                    className="mx-auto h-[300px] w-[240px] object-cover sm:h-[350px] sm:w-[280px] md:h-[400px] md:w-[320px] lg:h-[420px] lg:w-[340px]"
                />

            </div>

        </div>
    );
};

export default Banner;