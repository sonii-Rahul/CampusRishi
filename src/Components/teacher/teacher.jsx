import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import SideBar from './Dashboard/SideBar.jsx';
import DashHome from './Dashboard/DashHome.jsx';
import UserContext from '../context/userContext.js';

const Teacher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext)

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        navigate('/login');
      } else {
        try {
          const response = await Axios.post('/api/v1/users/verify', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (response.status === 200) {
            console.log(response.data.data)
            if(response.data.data.user.role==="teacher"){
              setUser(response.data.data.user);
            }else{
              navigate('/login');
            }
            
          }
        } catch (error) {
          console.error('An error occurred during token verification:', error);
          
        }
      }
    };
    checkToken();
  }, [navigate,setUser]);

  const handleLogout = async () => {
    try {
      const response = await Axios.post(
        '/api/v1/users/logout',
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  return (
    <><div className='flex'>
      {<SideBar logingout={handleLogout}/>}
      <Outlet/>
      </div>
    </>
  );
};

export default Teacher;
