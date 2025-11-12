import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';

const Navbar = () => {
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

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive && 'text-primary font-semibold'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/challenges" className={({ isActive }) => isActive && 'text-primary font-semibold'}>
          Challenges
        </NavLink>
      </li>
      <li>
        <NavLink to="/myactivities" className={({ isActive }) => isActive && 'text-primary font-semibold'}>
          My Activities
        </NavLink>
      </li>
       {
        user &&  <li>
        <NavLink to="/profile" className={({ isActive }) => isActive && 'text-primary font-semibold'}>
          Profile
        </NavLink>
      </li>
       }
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="space-y-2 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <img className="w-20 hover:animate-spin" src="https://i.postimg.cc/y6RVqbXm/logo-removebg-preview.png" alt="Logo" />
            <h1 className="hidden sm:block text-2xl font-bold">
              Eco<span className="text-primary font-semibold">Track</span>
            </h1>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-2 menu menu-horizontal px-1 text-[1rem] font-semibold text-secondary">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <div className="tooltip tooltip-bottom" data-tip={dbUser?.name || 'User'}>
            <button className="btn btn-primary flex items-center gap-2" onClick={signOutUser}>
              {dbUser?.imageUrl && !imageError ? (
                <img
                  src={dbUser.imageUrl}
                  alt="User"
                  onError={() => setImageError(true)}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-xl" />
              )}
              Log Out
            </button>
          </div>
        ) : (
          <>
            <Link className="btn btn-primary" to="/login">
              Log In
            </Link>
            <Link className="btn" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
