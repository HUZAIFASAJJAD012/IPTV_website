import React from 'react';

const PromoBanner = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="flex w-11/12 max-w-5xl overflow-hidden rounded-lg shadow-lg">
        {/* Left Side - Free Trial */}
        <div className="relative w-1/2 p-8 text-white bg-gradient-to-r from-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://your-image-url-left.com)' }}></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase">Confused! Can't make a decision?</p>
            <h2 className="mt-2 text-3xl font-bold">Get Free Trial now!</h2>
            <button className="px-6 py-2 mt-4 font-semibold text-purple-900 bg-white rounded-full hover:bg-gray-200">
              Free Trial →
            </button>
          </div>
        </div>

        {/* Right Side - Our Store */}
        <div className="relative w-1/2 p-8 text-white bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://your-image-url-right.com)' }}></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase">Join Us!</p>
            <h2 className="mt-2 text-3xl font-bold">Let's find our plans Tailored for you</h2>
            <button className="px-6 py-2 mt-4 font-semibold text-pink-900 bg-white rounded-full hover:bg-gray-200">
              Our Store →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
