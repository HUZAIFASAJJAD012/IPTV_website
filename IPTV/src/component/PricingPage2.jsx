import React, { useState, useEffect } from 'react';
import { Banner2 } from './Banner2';

function PricingPage2() {
  const [selectedConnections, setSelectedConnections] = useState(1); // State for selected connections
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.3;
      const element = document.getElementById('pricing-cards');
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Price calculation function based on base price and selected connections
  const calculatePrice = (basePrice) => basePrice * selectedConnections;

  // Pricing Plans
  const plans = [
    {
      title: "1 Month",
      basePrice: 11,
      duration: "/ 1 Month",
      description: "Unlimited Entertainment: 30 Days of IPTV Bliss!",
    },
    {
      title: "3 Months",
      basePrice: 30,
      duration: "/ 3 Months",
      description: "Stream Smarter: 90 Days of Premium IPTV Entertainment.",
    },
    {
      title: "6 Months",
      basePrice: 56,
      duration: "/ 6 Months",
      description: "Endless Entertainment: 6 Months of Premium IPTV.",
    },
    {
      title: "1 Year",
      basePrice: 90,
      duration: "/ 1 Year",
      description: "365 Days of Uninterrupted IPTV Entertainment.",
    },
  ];

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-900">Choose your plan</h2>
      </div>

      {/* Connection Selection Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        {[1, 2, 3, 4, 5].map((connection) => (
          <button
            key={connection}
            className={`px-4 py-2 font-semibold rounded-full ${
              selectedConnections === connection
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            } transition duration-200`}
            onClick={() => setSelectedConnections(connection)}
          >
            {connection} Connection{connection > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div id="pricing-cards" className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 text-center transform transition duration-500 ${
              isVisible ? "animate-fadeInLeft" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-semibold text-indigo-900">{plan.title}</h3>
            <p className="text-3xl font-bold text-red-600">
              ${calculatePrice(plan.basePrice)}{" "}
              <span className="text-lg font-normal text-gray-500">
                {plan.duration}
              </span>
            </p>
            <p className="text-gray-700 mt-2">{plan.description}</p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-left space-y-2 text-gray-700 font-medium">
              <li>✔ {selectedConnections} Device{selectedConnections > 1 ? "s" : ""} Connection</li>
              <li>✔ 18000+ TV Channels</li>
              <li>✔ Supports All Devices</li>
              <li>✔ 24/7 Instant Support</li>
            </ul>
            <a href="https://primehdstream.com/index.php?rp=/store/subscription">

            <button className="mt-6 px-6 py-3 bg-indigo-900 text-white font-semibold rounded-md hover:bg-indigo-800 transition duration-200">
              ORDER NOW
            </button>
            </a>
          </div>
        ))}
      </div>
      <Banner2/>
    </section>
  );
}

export default PricingPage2;
