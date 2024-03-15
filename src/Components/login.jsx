import React, { useState } from 'react';

import Axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is student
  const [invalidPassword, setInvalidPassword] = useState(false); // State for invalid password pop-up
  const navigate = useNavigate(); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('/api/v1/users/login', { username, password, role });
      console.log(response.data);
      if (response.status === 200) {
        const user = response.data.data.user;

        console.log('User:', user);
        if(user.role=="admin"){
          navigate('/admin', { state: { user } });
        }
        else if(user.role=="teacher"){

        navigate('/teacher', { state: { user } });
        }
        else{
          navigate('/student', { state: { user } });

        }
       
          // Navigate to /admin if role is admin
         
      }
    } catch (error) {
      console.error('An error occurred:', error); // handle error
      if (error.response.status === 500) {
        setInvalidPassword(true); // Show invalid password pop-up
        setTimeout(() => {
          setInvalidPassword(false); // Hide pop-up after 3 seconds
        }, 3000);
      }
      
    }
  };

  return (
    <section className="rounded-md bg-black/70 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
          <p className="mt-2text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </a>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="username" className="text-base font-medium text-gray-900">
                  {' '}
                  Username{' '}
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                  <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                    {' '}
                    Forgot password?{' '}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="text-base font-medium text-gray-900">
                  Role
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    className="block w-full px-3 py-2 rounded-md border border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    value={role}
                    onChange={handleRoleChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Login <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
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
        </div>
      </div>
    </section>
  );
}

export default Login;
