import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MiddleContainer from './MiddleContainer'
import ActiveFriendBar from './ActiveFriendBar'

const CommonLayout = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-between '>
        <Sidebar />
        <MiddleContainer />
        <ActiveFriendBar />
      </div>
    </>
  )
}

export default CommonLayout