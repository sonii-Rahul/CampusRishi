import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/userContext';

function Addteacher() {
    const { user } = useContext(UserContext);

    const [formData, setFormData] = useState({
      SchoolfullName: user ? user.fullName:  '',
      location: '', 
      username: '',
      password: '',
      role: '',
      TfullName:"",
       // Set initial value to user's fullName
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Make the POST request to your API endpoint
        console.log(formData)
        const response = await axios.post('/api/v1/teacher/teacherRegister', formData);
        console.log('Response:', response.data);
    
        // Clear the form data upon successful submission
        setFormData({
          SchoolfullName: user ? user.fullName:  '',
      location: '', 
      username: '',
      password: '',
      role: '',
      TfullName:"",
        });
    
        // Display success message using a popup or any other method
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error:', error);
        // Optionally, you can handle errors and display a message to the user
      }
    };
    
  
    return (
      <div className="p-4 justify-center max-h-screen overflow-y-auto container max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit} className="container max-w-screen-lg mx-auto m-2">
          <div className="border-b border-gray-900/10 pb-12 container">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="TfullName" className="block text-sm font-medium leading-6 text-gray-900">
                  Teacher Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="TfullName"
                    id="TfullName"
                    onChange={handleChange}
                    value={formData.TfullName}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                  location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleChange}
                    value={formData.location}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    value={formData.username}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={formData.password}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="col-span-full">
                <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                  Role
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    name="role"
                    onChange={handleChange}
                    value={formData.role}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="teacher">teacher</option>
                  </select>
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="SchoolfullName" className="block text-sm font-medium leading-6 text-gray-900">
                SchoolfullName
                </label>
                <div className="mt-2">
                  <select
                    name="SchoolfullName"
                    id="SchoolfullName"
                    onChange={handleChange}
                    value={formData.SchoolfullName}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value={user ? user.fullName : ''}>{user ? user.fullName : 'Select SchoolfullName'}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }

export default Addteacher