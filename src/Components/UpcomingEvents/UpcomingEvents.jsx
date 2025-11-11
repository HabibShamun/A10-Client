import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const UpcomingEvents = ({ events }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-10 px-4 bg-white">
      <h1 className="text-center mb-10 text-[#00A97E] text-3xl font-bold">Our Upcoming Events</h1>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00A97E]"></div>

        <div className="flex flex-col gap-12">
          {events.map((ev, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="bg-[#00A97E] text-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h3 className="text-xl font-bold mb-2">{ev.title}</h3>
                <p className="text-sm mb-1">📅 {ev.date}</p>
                <p className="text-sm mb-1">📍 {ev.location}</p>
                <p className="text-sm italic">{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
