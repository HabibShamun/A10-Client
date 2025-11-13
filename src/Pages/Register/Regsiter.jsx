import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Regsiter = () => {
    const navigate= useNavigate()
      const axios=useAxios()
    const {setUser,createUser,signInGoogle}=useAuth()
      const [nameError, setError] = useState("");
      const [showPassword, setShowPassword] = useState(true);
    const handleRegister = async (e) => {
  e.preventDefault();
  setError('');

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const photo = form.photo.value.trim();

  const nameRegex = /^.{6,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (!nameRegex.test(name)) {
    const msg = 'Name must be at least 6 characters long.';
    setError(msg);
    toast.error(msg);
    return;
  }

  if (!passwordRegex.test(password)) {
    const msg = 'Password must be at least 6 characters and include both uppercase and lowercase letters.';
    setError(msg);
    toast.error(msg);
    return;
  }

  try {
    const result = await createUser(email, password);
    const newUser = {
      name,
      email,
      image: photo
    };


    try {
      await axios.get(`/users?email=${email}`);
 
    } catch (err) {
      if (err.response && err.response.status === 404) {
     
        await axios.post('/users', newUser);
      } else {
        throw err;
      }
    }

    setUser(newUser);
    navigate('/');
  } catch (err) {
    console.error('Registration error:', err);
    toast.error('Failed to register user');
  }
};


   const handleSignInGoogle = async () => {
  try {
    const result = await signInGoogle();
    const newUser = {
      name: result.user.displayName,
      email: result.user.email,
      image: result.user.photoURL,
    };


    try {
      await axios.get(`/users?email=${newUser.email}`);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        await axios.post('/users', newUser);
      } else {
        throw err; // Other error
      }
    }

    setUser(newUser);
    navigate('/');
  } catch (error) {
    console.error('Google registration error:', error);
    toast.error('Failed to register with Google');
  }
};

      const handleEye = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
    <div className='flex m-2 flex-col min-h-screen justify-center items-center'>
        <h1 className="text-4xl mb-2 text-primary font-bold">Register to EcoTrack!</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">

            {/* name */}
            <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
            {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

          {/* photo */}

          <label className="label">PhotoURL</label>
          <input name='photo' type="text" className="input" placeholder="PhotoUrl...." />
          {/* password */}
          <label className="label">Password</label>
           <div className='relative'>
                                    <input name='password' required type={showPassword ? "password" : "text"} className="input" placeholder="Password" />
                                    <button onClick={handleEye} className="btn absolute top-2 right-5 btn-xs">
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>



          <button className="btn btn-primary mt-4">Sign Up</button>
          {
                                    nameError && <p className='text-red-500 font-semibold'>{nameError}</p>
                                }
          <button onClick={()=>handleSignInGoogle()} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Sign Up with Google
</button>
        </form>
        <p className='font-semibold'>Already have an account? <Link to={'/login'} className='text-primary'>Login</Link></p>
      </div>
    </div>
    <ToastContainer position="top-center" />
    </div>
    );
};

export default Regsiter;