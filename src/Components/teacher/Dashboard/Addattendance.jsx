import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisterStudent() {
  const [formData, setFormData] = useState({
    studentname: '',
    classid: '',
    status: false,
  });

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('YOUR_CLASSES_API_ENDPOINT');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
        setClasses([]); // Ensure classes is an array even if the API call fails
      }
    };
    fetchClasses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleClassChange = (e) => {
    const selectedClass = classes.find(cls => cls.classname === e.target.value);
    setFormData({
      ...formData,
      classid: selectedClass ? selectedClass._id : '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData);
      if (response.status === 200) {
        alert('Attendance marked successfully');
      } else {
        alert('Failed to mark attendance');
      }
    } catch (error) {
      alert('Failed to mark attendance');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center w-full">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Mark Attendance</h2>
          <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

          <form onSubmit={handleSubmit} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Student Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="studentname">Student Name</label>
                    <input
                      type="text"
                      name="studentname"
                      id="studentname"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.studentname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="classname">Class Name</label>
                    <select
                      name="classname"
                      id="classname"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={handleClassChange}
                    >
                      <option value="">Select Class</option>
                      {Array.isArray(classes) && classes.map((cls) => (
                        <option key={cls._id} value={cls.classname}>
                          {cls.classname}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="status"
                        id="status"
                        className="form-checkbox"
                        checked={formData.status}
                        onChange={handleChange}
                      />
                      <label htmlFor="status" className="ml-2">Present</label>
                    </div>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
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
