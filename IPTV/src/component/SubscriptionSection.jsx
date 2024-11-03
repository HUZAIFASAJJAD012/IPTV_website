import React from 'react';
import { FiPackage, FiTv, FiFilm, FiVideo } from 'react-icons/fi';
import rebot from "../assets/rebot.png"
function SubscriptionSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center">
      {/* Text Content */}
      <div className="max-w-lg">
        <div className="flex items-center mb-4">
          <FiPackage size={48} className="text-red-500 mr-2" />
          <span className="text-lg font-semibold text-gray-800">WORLD’S #1</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          The Best IPTV Subscription Service Provider
        </h2>
        
        <p className="text-gray-700 mb-8">
          Revolutionize your TV experience with our 4K Live IPTV site. Explore a vast selection of global channels, including popular shows, live sports, movies, documentaries, and more. Elevate your entertainment with us.
        </p>

        {/* Statistics */}
        <div className="flex space-x-8">
          <div className="text-center">
            <FiTv size={48} className="text-red-500 mx-auto mb-2" />
            <p className="text-lg font-bold text-gray-800">18000+ Channels</p>
          </div>
          <div className="text-center">
            <FiFilm size={48} className="text-red-500 mx-auto mb-2" />
            <p className="text-lg font-bold text-gray-800">17200+ TV Shows</p>
          </div>
          <div className="text-center">
            <FiVideo size={48} className="text-red-500 mx-auto mb-2" />
            <p className="text-lg font-bold text-gray-800">68400+ Movies</p>
          </div>
        </div>
      </div>

      {/* TV Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <img src={rebot} alt="4K TV" className="max-w-xs w-full" />
      </div>
    </section>
  );
}

export default SubscriptionSection;
