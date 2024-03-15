import React from 'react'
import { useLocation } from 'react-router-dom';



function admin() {
  const location = useLocation();
const { user } = location.state;
  return (
    <>
    <div>welcome {user.username} admin</div>
  
    </>
  )
}

export default admin