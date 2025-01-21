import React, { useState } from 'react'

const useFormHandler = (initialValues = {}, onSubmit) => {
    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState(null);

    const hadnleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({ ...prevData, [name]: value }))
    }

    handleSubmit 
  return (
    <div>useFormHandler</div>
  )
}

export default useFormHandler