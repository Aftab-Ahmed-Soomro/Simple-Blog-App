import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router'

const Dashboard = () => {
    const {session, signOut} = UserAuth()
    const navigate = useNavigate()

    console.log(session)

    const handleSignOut = async(e) => {
        e.preventDefault()
        try {
            await signOut()
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>
      <div className=''>
        <div className='bg-black flex items-center justify-between p-4 flex-wrap'>
            <Link to={'/'}>
            <h1 className='text-white font-bold text-xl lg:text-3xl cursor-pointer'>
                BLOGS BY AFTAB
            </h1>
            </Link>
            <div className='flex gap-4 lg:gap-6 mt-2 lg:mt-0'>
            <Link to={'/signup'}>
                <button className='rounded px-4 py-2 text-white border border-white transition duration-200 hover:bg-white hover:text-black'>
                    Add Blogs
                </button>
            </Link>
            <Link to={'/login'}>
                <button className='rounded px-4 py-2 text-white border border-white transition duration-200 hover:bg-white hover:text-black'>
                    All Blogs
                </button>
            </Link>
            <Link to={'/login'}>
                <button className='rounded px-4 py-2 text-white border border-white transition duration-200 hover:bg-white hover:text-black'>
                    Log Out
                </button>
            </Link>
            </div>
        </div>
        </div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <button onClick={handleSignOut} className='cursor-pointer'>Sign Out</button>
      </div>
    </div>
  )
}

export default Dashboard
