import React, { useContext } from 'react';
import axios from 'axios'; // Import Axios
import UserContext from '../../context/userContext';
import { startRegistration } from '@simplewebauthn/browser';
import Cookies from 'js-cookie';
function Passkey() {
    const accessToken = Cookies.get('accessToken');
  const { user, setUser } = useContext(UserContext);

  const fetchChallenge = async () => {
    try {
      const response = await axios.post('/api/v1/users/register-challenge', null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const challengeResult = response.data; // Axios automatically parses the response data
      const { options } = challengeResult;
      const authResult = await startRegistration(options);
      console.log(authResult);
      // Handle the fetched challenge data here
      console.log('Fetched challenge:', challengeResult);

      const verifyresponse = await axios.post('/api/v1/users/register-challengeverify', {cred:authResult}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(verifyresponse);
    } catch (error) {
      // Handle errors
      console.error('Error fetching challenge:', error);

    
    }
   
  };
  

  return (
    <>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        onClick={fetchChallenge}
      >
        Add passkey
      </button>
    </>
  );
}

export default Passkey;
