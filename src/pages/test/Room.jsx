import React from 'react'
import Sidebar from './Sidebar'
import Modal from './Modal'

export const Room = () => {
  return (
    <div className="App sm:grid sm:grid-cols-12">
      <Sidebar className="" />
      <div className="p-4 sm:col-span-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>Welcome to the main content area.</p>
      <Modal />
      </div>
    </div>
  )
}
