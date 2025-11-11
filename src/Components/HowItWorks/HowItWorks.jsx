import React from 'react';
import { FaUsers, FaChartLine, FaRegLightbulb } from 'react-icons/fa';

const steps = [
  {
    title: 'Join a Challenge',
    icon: <FaUsers size={40} />,
    description: 'Pick a challenge that excites you and commit to your goals.',
  },
  {
    title: 'Track Progress',
    icon: <FaChartLine size={40} />,
    description: 'Monitor your journey and stay motivated with real-time updates.',
  },
  {
    title: 'Share Tips',
    icon: <FaRegLightbulb size={40} />,
    description: 'Help others by sharing your insights and learning from the community.',
  },
];

const HowItWorks = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#00A97E] mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-[#00A97E] text-[#00A97E] rounded-lg shadow-md p-6 w-full max-w-sm text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
