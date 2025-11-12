import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const {user,signOutUser}=useAuth()
const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            && 'text-primary font-semibold'
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/challenges"
        className={({ isActive }) =>
         isActive
            && 'text-primary font-semibold'
            
        }
      >
        Challenges
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/myactivities"
        className={({ isActive }) =>
            isActive
            && 'text-primary font-semibold'
        }
      >
        My Activities
      </NavLink>
    </li>
  </>
);

           
    
    return (
        <div>
            {/*
            <div>
                
            </div> */}


            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="space-y-2 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <Link to={'/'}>
      <div className='flex items-center '>
                <img className='w-25 hover:animate-spin' src={`https://i.postimg.cc/y6RVqbXm/logo-removebg-preview.png`} alt="" />
                <h1 className='hidden sm:block text-2xl font-bold'>Eco<span className='text-primary font-semibold'>Track</span> </h1>
            </div>
    </Link>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-2 menu menu-horizontal px-1 text-[1rem] font-semibold text-secondary">
  {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    {
      user? <a ><Link className="btn btn-primary" onClick={signOutUser}>LogOut</Link></a>:
      <a ><Link className="btn btn-primary" to={'/login'}>Log In</Link></a>
    }
  {
    !user && <a ><Link className="btn" to={'/register'}>Register</Link></a>
  }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;