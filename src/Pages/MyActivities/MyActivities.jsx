import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';

const MyActivities = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [activities, setActivities] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`/users?email=${user.email}`);
        const dbUser = userRes.data;

        const [userChallengesRes, challengeDetailsRes, summaryRes] = await Promise.all([
          axios.get(`/userChallenges?userId=${dbUser._id}`),
          axios.get(`/userChallenges/joined?userId=${dbUser._id}`),
          axios.get(`/userChallenges/summary?userId=${dbUser._id}`)
        ]);

        const userChallenges = userChallengesRes.data;
        const challengeDetails = challengeDetailsRes.data;

        const merged = challengeDetails.map((challenge) => {
          const match = userChallenges.find((uc) => uc.challengeId === challenge._id);
          return {
            ...challenge,
            status: match?.status || 'not started',
            progress: match?.progress ?? 0,
          };
        });

        setActivities(merged);
        setSummary(summaryRes.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email, axios]);

  if (loading) {
    return <div className="text-center py-10">Loading your activities...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-[#00A97E] mb-6">My Joined Challenges</h2>

   {summary && (
  <div className="mb-8 p-4 bg-base-100 border border-[#00A97E] rounded-md shadow-sm">
    <h3 className="text-lg font-semibold text-[#00A97E] mb-2">Your Challenge Summary</h3>
    <ul className="text-sm space-y-1">
      <li><strong>Total Challenges:</strong> {summary.totalChallenges}</li>
      <li><strong>Joined:</strong> {summary.totalJoined}</li>
      <li><strong>Ongoing:</strong> {summary.ongoing}</li>
      <li><strong>Finished:</strong> {summary.finished}</li>
      <li><strong>Not Started:</strong> {summary.notStarted}</li>
      <li><strong>Average Progress:</strong> {summary.averageProgress}%</li>
    </ul>
  </div>
)}

      {activities.length === 0 ? (
        <p className="text-gray-500">You haven't joined any challenges yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((challenge) => (
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
                  <p><strong>Status:</strong> {challenge.status}</p>
                  <p><strong>Progress:</strong> {challenge.progress}%</p>
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
