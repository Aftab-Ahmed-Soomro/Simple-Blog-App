import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const {session} = UserAuth()
  return (
    <>
    {
        session ? <>{children}</> : <Navigate to="/signup" />
    }
    {
        session == undefined && (
            <p>Loading...</p>
        )
    }
    </>
  )
}

export default PrivateRoute
