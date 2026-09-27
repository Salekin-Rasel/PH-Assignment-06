import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0d0f12] flex items-center justify-center px-6">

            <div className="text-center">

                <h1 className="text-8xl font-extrabold text-lime-400">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-white">
                    PAGE NOT FOUND
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    The page you are looking for does not exist.
                </p>

               

            </div>

        </div>
    );
};

export default NotFound;