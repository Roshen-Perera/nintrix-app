import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignInBtn = () => {
  return (
    <SignInButton>
      <button className="text-sm font-semibold text-lightColor hover:cursor-pointer hover:text-darkColor hoverEffect">
        Login
      </button>
    </SignInButton>
  );
}

export default SignInBtn