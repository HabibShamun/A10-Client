import React from 'react';
import { Link } from 'react-router';

const Reset = () => {
    return (
        <div>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Check Your Email</h1>
      <p className="py-6">
A reset link has been sent to your email address, please click the link to reset your password.
      </p>
      <Link to="/login" className="btn btn-primary">
  Go to Login Page
</Link>

    </div>
  </div>
</div>
        </div>
    );
};

export default Reset;
