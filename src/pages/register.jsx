import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import FormRegister from '../components/auth/FormRegister'

const Register = () => {
  return (
    <AuthLayout type="register">
        <FormRegister />
    </AuthLayout>
  )
}

export default Register