import React from 'react'
import { useLocation } from 'react-router-dom';


export default function student() {
  const location = useLocation();
  const { user } = location.state;
  return (
    <div>welcome {user.username}student</div>
  )
}
