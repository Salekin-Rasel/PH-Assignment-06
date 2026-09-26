import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nav = () => {

    const link = <>

        <Link href={'/exercises' } className="bg-[#252525] text-lime-400" ><li> Workouts </li></Link>
        <Link href={'/Plan'}className="text-gray-300 hover:bg-[#252525] hover:text-lime-400 font-bold"><li>  My-Plan </li></Link>
        
    </>

    return (
        <div className="navbar bg-[#111111] border-b border-[#252525] px-4 lg:px-8">

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
        className="menu menu-sm dropdown-content bg-[#181818] text-white rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
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
    <Link href={'/'} className="btn btn-ghost text-xl font-bold text-white hover:bg-transparent">
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

    <Link
      href="/Plan"
      className="   bg-[#181818] text-white hover:border-lime-400 hover:text-lime-400"
    >
      Plan
    </Link>

    <Link
      href="/Saved"
      className="  bg-[#181818] text-white hover:border-lime-400 hover:text-lime-400"
    >
      Saved
    </Link>

  </div>

</div>
    );
};

export default Nav;