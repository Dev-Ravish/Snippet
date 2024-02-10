import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'><SignIn afterSignInUrl={"/"} afterSignUpUrl={"/"}/></div>
  )
}

export default SignInPage