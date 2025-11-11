import React from 'react';

const ActiveChallenges = ({ ActiveChallenges }) => {
  console.log(ActiveChallenges);

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {ActiveChallenges.map((challenge) => (
          <div key={challenge._id} className="card bg-base-100 w-full max-w-sm shadow-md flex flex-col justify-between">
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
              <p className="text-sm">{challenge.description}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveChallenges;
