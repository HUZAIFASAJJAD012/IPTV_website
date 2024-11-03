import React, { useState } from 'react';

function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-900">Choose your plan</h2>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8" >
        <button
          className={`px-6 py-2 font-semibold rounded-l-lg ${isMonthly ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} transition duration-200`}
          onClick={() => setIsMonthly(true)}
        >
          MONTHLY
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-r-lg ${!isMonthly ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} transition duration-200`}
          onClick={() => setIsMonthly(false)}
        >
          YEARLY
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src={"logo"} alt="Logo" className="mx-auto mb-4 w-16" />
          <h3 className="text-xl font-semibold text-indigo-900">1 Month</h3>
          <p className="text-3xl font-bold text-red-600">$11 <span className="text-lg font-normal text-gray-500">/ Month</span></p>
          <p className="text-gray-700 mt-2">Unlimited Entertainment: 30 Days of Nonstop IPTV Bliss!</p>
          <hr className="my-4 border-gray-300" />
          <ul className="text-left space-y-2 text-gray-700 font-medium">
            <li>✔ 1 Device Connection</li>
            <li>✔ 18000+ TV Channels</li>
            <li>✔ Supports All Devices</li>
            <li>✔ 24/7 Instant Support</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-indigo-900 text-white font-semibold rounded-md hover:bg-indigo-800 transition duration-200">
            ORDER NOW
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src={"logo"} alt="Logo" className="mx-auto mb-4 w-16" />
          <h3 className="text-xl font-semibold text-indigo-900">3 Months</h3>
          <p className="text-3xl font-bold text-red-600">$30 <span className="text-lg font-normal text-gray-500">/ 3 Months</span></p>
          <p className="text-gray-700 mt-2">Stream Smarter: 90 Days of Premium IPTV Entertainment</p>
          <hr className="my-4 border-gray-300" />
          <ul className="text-left space-y-2 text-gray-700 font-medium">
            <li>✔ 1 Device Connection</li>
            <li>✔ 18000+ TV Channels</li>
            <li>✔ Supports All Devices</li>
            <li>✔ 24/7 Instant Support</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-indigo-900 text-white font-semibold rounded-md hover:bg-indigo-800 transition duration-200">
            ORDER NOW
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img src={"logo"} alt="Logo" className="mx-auto mb-4 w-16" />
          <h3 className="text-xl font-semibold text-indigo-900">6 Months</h3>
          <p className="text-3xl font-bold text-red-600">$56 <span className="text-lg font-normal text-gray-500">/ 6 Months</span></p>
          <p className="text-gray-700 mt-2">Endless Entertainment: 6 Months of Premium IPTV</p>
          <hr className="my-4 border-gray-300" />
          <ul className="text-left space-y-2 text-gray-700 font-medium">
            <li>✔ 1 Device Connection</li>
            <li>✔ 18000+ TV Channels</li>
            <li>✔ Supports All Devices</li>
            <li>✔ 24/7 Instant Support</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-indigo-900 text-white font-semibold rounded-md hover:bg-indigo-800 transition duration-200">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
