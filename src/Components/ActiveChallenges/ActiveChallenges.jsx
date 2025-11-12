import React, { useEffect } from 'react';
import { Link } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ActiveChallenges = ({ ActiveChallenges }) => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div>
      <h1
        className="text-center mt-10 mb-4 text-primary text-3xl font-bold"
        data-aos="fade-down"
      >
        Our Challenges
      </h1>

      <div className="px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {ActiveChallenges.map((challenge, index) => (
            <div
              key={challenge._id}
              className="card bg-base-100 w-full max-w-sm shadow-md flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <figure className="px-6 pt-6">
                <img
                  src={challenge.imageUrl}
                  alt={challenge.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center px-6 pb-6">
                <h2 className="card-title">{challenge.title}</h2>
                <p className="text-sm text-gray-500">{challenge.category}</p>
                <p className="text-sm text-gray-700">{challenge.description}</p>
                <div className="card-actions mt-4">
                  <Link to={`/challengedetails/${challenge._id}`} className="btn btn-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-5" data-aos="fade-up">
        <Link to="/challenges" className="btn btn-primary">
          See All of our Challenges
        </Link>
      </div>
    </div>
  );
};

export default ActiveChallenges;
