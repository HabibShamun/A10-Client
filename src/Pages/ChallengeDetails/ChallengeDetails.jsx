import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'; 
import {
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaBolt,
  FaBullseye,
} from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import { toast, ToastContainer } from 'react-toastify';

const ChallengeDetails = () => {
  const challenge = useLoaderData();
  const {
    title,
    category,
    description,
    duration,
    target,
    participants,
    impactMetric,
    createdBy,
    startDate,
    endDate,
    imageUrl,
    _id: challengeId,
  } = challenge;

  const { user } = useAuth();
  const axios = useAxios();
  const [joined, setJoined] = useState(false);
  const [dbUserId, setDbUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchJoinStatus = async () => {
      try {
        const userRes = await axios.get(`/users?email=${user.email}`);
        const dbUser = userRes.data;
        setDbUserId(dbUser._id);

        const statusRes = await axios.get(
          `/userChallenges/check-status?userId=${dbUser._id}&challengeId=${challengeId}`
        );
        setJoined(statusRes.data.joined);

        if (statusRes.data.joined) {
          const joinedData = await axios.get(`/userChallenges`);
          const match = joinedData.data.find(
            (j) => j.userId === dbUser._id && j.challengeId === challengeId
          );
          if (match) {
            setStatus(match.status);
            setProgress(match.progress);
          }
        }
      } catch (error) {
        console.error('Error checking join status:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchJoinStatus();
    }
  }, [user?.email, challengeId, axios]);

  const handleJoinChallenge = async () => {
    try {
      const joinedChallenge = {
        userId: dbUserId,
        challengeId,
        joinedAt: new Date().toISOString(),
        status: 'ongoing',
        progress: 0,
      };

      await axios.post('/userChallenges', joinedChallenge);
      setJoined(true);
      setStatus('ongoing');
      setProgress(0);
      toast.success('Challenge joined successfully!');
    } catch (error) {
      console.error('Error joining challenge:', error);
      toast.error('Failed to join challenge.');
    }
  };

  const removeJoinChallenge = async () => {
    try {
      await axios.delete(
        `/userChallenges?userId=${dbUserId}&challengeId=${challengeId}`
      );
      setJoined(false);
      setStatus('');
      setProgress(0);
      toast.success('Challenge removed successfully!');
    } catch (error) {
      console.error('Error removing challenge:', error);
      toast.error('Failed to remove challenge.');
    }
  };

  const markAsFinished = async () => {
    try {
      await axios.patch('/userChallenges/update', {
        userId: dbUserId,
        challengeId,
        status: 'finished',
        progress: 100,
      });
      setStatus('finished');
      setProgress(100);
      toast.success('Challenge marked as finished!');
    } catch (error) {
      console.error('Error updating challenge:', error);
      toast.error('Failed to update challenge.');
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium text-gray-500">
        Loading challenge details...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-[#00A97E]">
        <figure className="lg:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full rounded-l-lg"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl text-[#00A97E] font-bold">
            {title}
          </h2>
          <p className="text-sm text-gray-600 italic">{category}</p>
          <p className="mt-2">{description}</p>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaClock className="text-[#00A97E]" />
              <span>Duration: {duration} days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#00A97E]" />
              <span>
                {startDate} → {endDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaBolt className="text-[#00A97E]" />
              <span>Impact Metric: {impactMetric}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBullseye className="text-[#00A97E]" />
              <span>Goal: {target}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-[#00A97E]" />
              <span>Participants: {participants}</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Created by: {createdBy}
            </div>
          </div>

          {joined && (
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                Status: <strong>{status}</strong>
              </p>
              <p className="text-sm">
                Progress: <strong>{progress}%</strong>
              </p>
              {status !== 'finished' && (
                <button
                  className="btn btn-sm btn-info"
                  onClick={markAsFinished}
                >
                  Mark as Finished
                </button>
              )}
            </div>
          )}

          <div className="card-actions mt-4">
            {joined ? (
              <button
                onClick={removeJoinChallenge}
                className="btn btn-outline btn-error"
              >
                Remove Challenge
              </button>
            ) : (
              <button
                onClick={handleJoinChallenge}
                className="btn btn-outline btn-success"
              >
                Join Challenge
              </button>
            )}
          </div>
        </div>
      </div>
       <ToastContainer position="top-center" />
    </div>
  );
};

export default ChallengeDetails;
