import React, { useContext, useEffect} from 'react';
import {Outlet, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import UserContext from '../context/userContext.js';
import SideBar from './DashBoard/SideBar.jsx'

function school() {
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
              setUser(response.data.data.user);
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
    
    
      if (!user) {
        return <div>Loading...</div>;
      }
      return (
        <><div className='flex'>
        {<SideBar logingout={handleLogout}/>}
        <Outlet/>
        </div>
      </>
      )
    }

export default school