import React from 'react';
import { FiPackage } from 'react-icons/fi';

function PremiumFeaturesSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center">
      {/* Image Collage */}
      <div className="flex flex-wrap items-center justify-center md:justify-start mb-10 md:mb-0 md:mr-10">
        <div className="relative flex flex-col items-center justify-center space-y-4">
          <img src={"platformImage"} alt="Android" className="rounded-full shadow-lg w-28 h-28 bg-black" />
          <img src={"platformImage"} alt="iOS" className="rounded-full shadow-lg w-20 h-20 bg-indigo-600 absolute top-0 left-8" />
          <img src={"platformImage"} alt="PC & Laptop" className="rounded-full shadow-lg w-24 h-24 bg-red-600 absolute -top-8 right-10" />
          <img src={"platformImage"} alt="Apple TV" className="rounded-full shadow-lg w-16 h-16 bg-purple-600 absolute -bottom-4 left-6" />
          <img src={"platformImage"} alt="Firestick" className="rounded-full shadow-lg w-20 h-20 bg-red-600 absolute -bottom-10 right-8" />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <div className="flex items-center mb-4">
          <FiPackage size={48} className="text-red-500 mr-2" />
          <span className="text-lg font-semibold text-gray-800">PREMIUM FEATURES OF 4KLiveIPTV</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Get a New Experience With 4KLive IPTV
        </h2>
        
        <p className="text-gray-700 mb-8">
          Our 4K Live IPTV service promises a fresh, immersive experience, delivering a seamless blend of quality, variety, and innovation. Explore a new era in streaming.
        </p>

        {/* Statistics */}
        <div className="flex space-x-8 justify-center md:justify-start">
          <div className="text-center">
            <img src={"clientsIcon"} alt="Clients Icon" className="mx-auto mb-2 w-12 h-12" />
            <p className="text-lg font-bold text-gray-800">51000+ CLIENTS</p>
          </div>
          <div className="text-center">
            <img src={"serversIcon"} alt="Servers Icon" className="mx-auto mb-2 w-12 h-12" />
            <p className="text-lg font-bold text-gray-800">100+ Servers</p>
          </div>
          <div className="text-center">
            <img src={"teamIcon"} alt="Team Icon" className="mx-auto mb-2 w-12 h-12" />
            <p className="text-lg font-bold text-gray-800">17+ TEAM MEMBERS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumFeaturesSection;
