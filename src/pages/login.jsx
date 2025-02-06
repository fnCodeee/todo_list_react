import React from 'react'
import FormLogin from '../components/auth/FormLogin';
import AuthLayout from '../components/Layout/AuthLayout'

const Login = () => {
  return (
    <AuthLayout type="login">
      <FormLogin />
    </AuthLayout>
  )
}

export default Login