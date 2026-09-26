import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#202228] bg-[#08090b] px-6 py-10 mt-50">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={'/logo.png'} alt='logo' height={20} width={20}></Image>

          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>


        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>

    </footer>
    );
};

export default Footer;