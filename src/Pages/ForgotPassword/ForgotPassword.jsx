import React, { useState, use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const ForgotPassword = () => {
     const location = useLocation();
  const defaultEmail = location.state?.email || "";
  const [emailInput, setEmailInput] = useState(defaultEmail);
  const { resetPassword } = useAuth()
  const navigate = useNavigate();
  const [error, setError] = useState("");

const handleReset = (e) => {
  e.preventDefault();
  resetPassword(emailInput)
    .then(() => navigate("/auth/successreset"))
    .catch((err) => setError(err.message));
};


  return (
    <>
   

    <div className='min-h-100 flex flex-col justify-center items-center space-y-3'>
      <h2 className='font-semibold'>Enter Email to reset your password:</h2>
      <div className='shadow-xl'>
        <form onSubmit={handleReset} className='flex flex-col justify-center items-center p-10'>
          <label className="label">Email</label>
          <input
  name="email"
  required
  type="email"
  className="input mb-7"
  placeholder="Email"
  value={emailInput}
  onChange={(e) => setEmailInput(e.target.value)}
/>

          <button type='submit' className='btn btn-primary'>Submit</button>
          <button type='button' className='btn mt-3 btn-primary'>
            <Link to={"/auth/login"}>Go Back</Link>
          </button>
          {error && <p className='text-red-600 mt-3'>{error}</p>}
        </form>
      </div>
    </div>
    </>
    
  );
};

export default ForgotPassword;
