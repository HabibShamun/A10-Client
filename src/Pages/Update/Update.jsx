import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import { FaUserCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router';

const Update = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [dbUser, setDbUser] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({ name: '', profileImage: '' });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(`/users?email=${user.email}`);
        setDbUser(res.data);
        setFormData({
          name: res.data.name || '',
          profileImage: res.data.imageUrl || '',
        });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (user?.email) {
      fetchUserInfo();
    }
  }, [user?.email, axios]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`/users?email=${user.email}`, {
        name: formData.name,
        profileImage: formData.profileImage,
      });
      toast.success(res.data.message || 'Profile updated!');
    } catch (error) {
      console.error('Update failed:', error);
      toast.error('Failed to update profile.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-6">
      <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-[#00A97E] mb-6">Update Profile</h2>

        <div className="flex justify-center mb-4">
          {formData.profileImage && !imageError ? (
            <img
              src={formData.profileImage}
              alt="Profile"
              onError={() => setImageError(true)}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#00A97E]"
            />
          ) : (
            <FaUserCircle className="text-6xl text-gray-400" />
          )}
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Profile Image URL</span>
            </label>
            <input
              type="text"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-success w-full mt-4">
            Save Changes
          </button>
        </form>
        <Link to={'/profile'}  className="btn btn-primary w-full mt-4">
            Go Back
          </Link>
      </div>
          <ToastContainer position="top-center" />
    </div>
  );
};

export default Update;
