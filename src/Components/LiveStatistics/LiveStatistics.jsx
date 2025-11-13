import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';

const LiveStatistics = () => {
  const axios = useAxios();
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const res = await axios.get('/users/count');
        setUserCount(res.data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, [axios]);

  return (
    <div>
      <h1 className='text-center mt-10 mb-4 text-primary text-3xl font-bold'>Live Statistics</h1>
      <div className='flex flex-wrap justify-center items-center gap-6 p-5'>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="text-xl card-title text-secondary">Community Members</h2>
            <p className='text-4xl text-primary font-bold'>{userCount}</p>
            <p className='text-xl text-secondary'>and growing</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="text-xl card-title text-secondary">CO₂ Saved</h2>
            <p className='text-4xl text-primary font-bold'>100 kg</p>
            <p className='text-xl text-secondary'>through sustainable actions</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="text-xl card-title text-secondary">Plastic Reduced</h2>
            <p className='text-4xl text-primary font-bold'>500 kg</p>
            <p className='text-xl text-secondary'>kept out of landfills</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveStatistics;
