import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
       <div className="container flex min-h-[500px] items-center justify-between bg-[#15171D] px-8 py-16 lg:px-16 m-20 rounded-2xl">

  {/* Left side */}
  <div className="max-w-2xl">

    <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-lime-400">
      WORKOUT LIBRARY
    </p>

    <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
      TRAIN WITH INTENT. LOG <br />
      EVERY SET.
    </h1>

    <p className="mb-8 text-base leading-7 text-gray-400 md:text-lg">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
      <br className="hidden md:block" />
      into today's plan, and watch the week's work add up.
    </p>

    <Link href={'/exercises'} className="btn border-none bg-lime-400 px-6 text-sm font-bold text-black hover:bg-lime-300">
      BROWSE WORKOUTS
    </Link>

  </div>


  {/* Right side */}
  <div className="hidden lg:block">

    <Image
      src="/banner.png"
      alt="banner"
      width={400}
      height={500}
      className="h-[420px] w-[340px] object-cover"
    />

  </div>

</div>
    );
};

export default Banner;