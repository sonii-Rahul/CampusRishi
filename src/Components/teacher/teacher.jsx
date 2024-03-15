import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import TnavBar from './TnavBar.jsx';
import SideBar from './Dashboard/SideBar.jsx';
import DashHome from './Dashboard/DashHome.jsx';

const Teacher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(location.state?.user);

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        navigate('/login');
      } else {
        try {
          const response = await Axios.get('/api/v1/users/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (response.status === 200) {
            setUser(response.data);
          }
        } catch (error) {
          console.error('An error occurred during token verification:', error);
          // Optionally, provide user feedback about the error.
        }
      }
    };
    checkToken();
  }, [navigate]);

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
      {user &&  <SideBar user={user} logingout={handleLogout}/>}
      <DashHome/>
      </div>
    </>
  );
};

export default Teacher;
