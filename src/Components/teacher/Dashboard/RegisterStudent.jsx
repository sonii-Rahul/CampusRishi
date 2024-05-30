import React, { useState } from 'react';
import axios from 'axios';

function RegisterStudent() {
  const [formData, setFormData] = useState({
    fullName: '',
    SchoolfullName: '',
    location: '',
    username: '',
    password: '',
    courseName: '',
    role: 'student',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/student/studentRegister', formData);
      console.log('Response:', response.data);
      if (response.status === 201) {
        alert('Success');
      } else {
        alert('Failed');
        console.log(response);
      }
    } catch (error) {
      alert('Failed');
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center w-full">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
          <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

          <form onSubmit={handleSubmit} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="SchoolfullName">School Full Name</label>
                    <input
                      type="text"
                      name="SchoolfullName"
                      id="SchoolfullName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.SchoolfullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="courseName">Course Name</label>
                    <input
                      type="text"
                      name="courseName"
                      id="courseName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.courseName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="role">Role</label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.role}
                      readOnly
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterStudent;
