import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from './context/userContext.js';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { startAuthentication } from '@simplewebauthn/browser';
function passkeylogin() {
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [role, setRole] = useState('student');
  const { user, setUser } = useContext(UserContext)

  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('/api/v1/users/loginchallenge', { username });
      const challengeResult = response.data; // Axios automatically parses the response data
      const { options } = challengeResult;
      const autheticationresult= await startAuthentication(options)
      console.log(autheticationresult);
      const verifyresponse = await Axios.post('/api/v1/users/verifyloginchallenege', {username,cred:autheticationresult},
      
      );
      console.log(verifyresponse);

      
      if (verifyresponse.status === 200) {
        const user = verifyresponse.data.data.user
        setUser(user)
        console.log(user)

        if (user.role == "admin") {
          navigate('/admin/addSchool');
        }
        else if (user.role == "teacher") {

          navigate('/teacher/dashboard');
        }
        else if (user.role == "school") {

          navigate('/school/addteacher');
        }
        else {
          navigate('/student');

        }

      }
      
    
    } catch (error) {
      console.error('An error occurred:', error);
      if (error.response.status === 500) {
        setInvalidPassword(true);
        setTimeout(() => {
          setInvalidPassword(false);
        }, 3000);
      }

    }
  };

  return (
    <section>
    <div className="grid grid-cols-1 lg:grid-cols-2 p-8 bg-orange-400 font-salsa">
      <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div className="absolute inset-0 rounded-3xl">
          <img
            className="h-full w-full rounded-md object-cover object-top"
            src="https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative">
          <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
            <h3 className="text-4xl font-bold text-white">
             
            </h3>
            
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign in</h2>
          <p className="mt-2 text-sm text-black">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="font-semibold text-white transition-all duration-200 hover:underline">
              Create a free account
            </Link>
          </p>
          <p className="mt-2 text-sm text-black">
            Back Home{' '}
            <Link to="/" className="font-semibold text-white transition-all duration-200 hover:underline">
              Go to Home
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="username" className="text-base font-medium text-white">
                  {' '}
                  Username{' '}
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    className="flex h-10 w-full rounded-md border border-white px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>

              <div>

              </div>
              <motion.div
                whileHover={{ scale: 1.0, }}
                whileTap={{
                  scale: 0.9,
                  borderRadius: "100%"
                }}
              >
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Login <ArrowRight className="ml-2" size={16} />
                </button>
              </motion.div>
            </div>
          </form>
          {/* Invalid password pop-up */}
          {invalidPassword && (
            <div className="absolute inset-0 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-md shadow-md">
                <p className="text-red-500">Invalid password. Please try again.</p>
              </div>
            </div>
          )}
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default passkeylogin