import React, { useState } from 'react';

function Addattendance() {
  // Define state variables to hold attendance data
  const [attendanceData, setAttendanceData] = useState({
    studentName: '',
    present: false
  });

  // Handle input change for student name
  const handleNameChange = (event) => {
    setAttendanceData({
      ...attendanceData,
      studentName: event.target.value
    });
  };

  // Handle checkbox change for attendance
  const handleAttendanceChange = (event) => {
    setAttendanceData({
      ...attendanceData,
      present: event.target.checked
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle submission logic, such as sending data to a server
    console.log('Attendance Data:', attendanceData);
    // Reset form fields
    setAttendanceData({
      studentName: '',
      present: false
    });
  };

  return (
    <div>
      <h2>Take Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Student Name:
            <input
              type="text"
              value={attendanceData.studentName}
              onChange={handleNameChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Present:
            <input
              type="checkbox"
              checked={attendanceData.present}
              onChange={handleAttendanceChange}
            />
          </label>
        </div>
        <button type="submit">Submit Attendance</button>
      </form>
    </div>
  );
}

export default Addattendance;
