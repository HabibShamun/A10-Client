import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';

const MyActivities = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoinedChallenges = async () => {
      try {
        const userRes = await axios.get(`/users?email=${user.email}`);
        const dbUser = userRes.data;

        const joinedRes = await axios.get(`/userChallenges/joined?userId=${dbUser._id}`);
        setChallenges(joinedRes.data);
      } catch (error) {
        console.error('Error fetching joined challenges:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchJoinedChallenges();
    }
  }, [user?.email, axios]);

  if (loading) {
    return <div className="text-center py-10">Loading your activities...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-[#00A97E] mb-6">My Joined Challenges</h2>
      {challenges.length === 0 ? (
        <p className="text-gray-500">You haven't joined any challenges yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((challenge) => (
            <div key={challenge._id} className="card bg-base-100 shadow-sm border border-[#00A97E] rounded-md">
              <figure className="h-32 overflow-hidden">
                <img src={challenge.imageUrl} alt={challenge.title} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body p-4">
                <h3 className="text-lg font-semibold text-[#00A97E]">{challenge.title}</h3>
                <p className="text-xs text-gray-500 italic">{challenge.category}</p>
                <p className="text-sm mt-1 line-clamp-2">{challenge.description}</p>
                <div className="mt-2 text-xs space-y-1">
                  <p><strong>Duration:</strong> {challenge.duration} days</p>
                  <p><strong>Goal:</strong> {challenge.target}</p>
                </div>
                <div className="mt-3">
                 <Link to={`/challengedetails/${challenge._id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyActivities;
