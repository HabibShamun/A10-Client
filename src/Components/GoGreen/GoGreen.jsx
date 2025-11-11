import React from 'react';
import Marquee from 'react-fast-marquee';

const GoGreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-primary my-6">Why Go Green?</h1>
      <Marquee pauseOnHover={true} speed={60}>
        <div className="flex gap-6 px-4">
          {[
            {
              title: "Save Money",
              desc: "Energy-efficient appliances can cut household energy bills by up to 30%.",
            },
            {
              title: "Cleaner Air",
              desc: "Sustainable transport and green spaces reduce urban air pollution, improving public health.",
            },
            {
              title: "Consumer Shift",
              desc: "72% of global consumers prefer eco-friendly products, even at a higher cost.",
            },
            {
              title: "Climate Action",
              desc: "Renewable energy helped avoid 2.5 billion tons of CO₂ emissions in 2024.",
            },
            {
              title: "Business Advantage",
              desc: "88% of executives say sustainability boosts brand reputation and competitiveness.",
            },
            {
              title: "Waste Reduction",
              desc: "Circular economy models could reduce global waste by 39% by 2030.",
            },
            {
              title: "Youth Leadership",
              desc: "Gen Z and Millennials are driving eco-conscious habits in homes and workplaces.",
            },
            {
              title: "Global Impact",
              desc: "In 2024, global CO₂ emissions from energy dropped by 2%, reversing previous growth trends.",
            },
          ].map((card, index) => (
            <div key={index} className="card w-80 bg-base-100 border border-primary shadow-md">
              <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title text-primary text-center">{card.title}</h2>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default GoGreen;
