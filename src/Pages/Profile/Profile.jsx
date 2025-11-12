import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router';

const Profile = () => {
  const { user, signOutUser } = useAuth();
  const axios = useAxios();
  const [dbUser, setDbUser] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(`/users?email=${user.email}`);
        setDbUser(res.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (user?.email) {
      fetchUserInfo();
    }
  }, [user?.email, axios]);

  return (
    <div className='min-h-screen flex justify-center items-center'>

         <div className="p-16 max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-[#00A97E] mb-6">My Profile</h2>

      <div className="flex flex-col items-center">
        {dbUser?.imageUrl && !imageError ? (
          <img
            src={dbUser.imageUrl}
            alt="Profile"
            onError={() => setImageError(true)}
            className="w-24 h-24 rounded-full object-cover border-2 border-[#00A97E]"
          />
        ) : (
          <FaUserCircle className="text-6xl text-gray-400" />
        )}

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">Name: {dbUser?.name || 'No name available'}</p>
          <p className="text-sm text-gray-600"><span className='font-bold'>Email: </span> {dbUser?.email || user?.email}</p>
        </div>

        <button
          onClick={signOutUser}
          className="mt-4 btn btn-outline btn-primary w-full"
        >
          Log Out
        </button>
        <Link
          to={'/update'}
          className="mt-4 btn btn-outline btn-primary w-full"
        >
          Update
        </Link>
        
      </div>
    </div>

    </div>
   
  );
};

export default Profile;
