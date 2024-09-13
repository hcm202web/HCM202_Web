import React from 'react';
import SignInForm from '../components/LoginForm';

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen w-screen h-screen bg-white flex items-center justify-center ">
      <div className="container ">
        <div className="flex justify-center items-center">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
