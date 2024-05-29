import React from 'react'
import AuthForm from './AuthForm'

export default function register() {
  return (
    <section className='flex-center size-full'>
        <AuthForm authType='SignUp' />
    </section>
  )
}
