import React, { useState, useEffect } from 'react';

function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.3;
      const element = document.getElementById('pricing-cards');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = isMonthly
    ? [
        { title: "1 Month", price: "$11", duration: "/ Month", description: "Unlimited Entertainment: 30 Days of Nonstop IPTV Bliss!" },
        { title: "3 Months", price: "$30", duration: "/ 3 Months", description: "Stream Smarter: 90 Days of Premium IPTV Entertainment" },
        { title: "6 Months", price: "$56", duration: "/ 6 Months", description: "Endless Entertainment: 6 Months of Premium IPTV" },
      ]
    : [
        { title: "1 Year", price: "$100", duration: "/ Year", description: "365 Days of Uninterrupted IPTV Entertainment" },
        { title: "2 Years", price: "$180", duration: "/ 2 Years", description: "Experience IPTV Premium for 2 Full Years" },
        { title: "Lifetime", price: "$300", duration: "/ Lifetime", description: "Lifetime IPTV Access with Unlimited Entertainment" },
      ];

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-900">Choose your plan</h2>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 font-semibold rounded-l-lg ${isMonthly ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} transition duration-200`}
          onClick={() => {
            setIsMonthly(true);
            console.log('Switched to Monthly');
          }}
        >
          MONTHLY
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-r-lg ${!isMonthly ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} transition duration-200`}
          onClick={() => {
            setIsMonthly(false);
            console.log('Switched to Yearly');
          }}
        >
          YEARLY
        </button>
      </div>

      {/* Pricing Cards */}
      <div id="pricing-cards" className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 text-center transform transition duration-500 ${
              isVisible ? 'animate-fadeInLeft' : 'opacity-0'
            }`}
          >
            <img src={"logo"} alt="Logo" className="mx-auto mb-4 w-16" />
            <h3 className="text-xl font-semibold text-indigo-900">{plan.title}</h3>
            <p className="text-3xl font-bold text-red-600">
              {plan.price} <span className="text-lg font-normal text-gray-500">{plan.duration}</span>
            </p>
            <p className="text-gray-700 mt-2">{plan.description}</p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-left space-y-2 text-gray-700 font-medium">
              <li>✔ 1 Device Connection</li>
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
    </section>
  );
}

export default PricingPage;
