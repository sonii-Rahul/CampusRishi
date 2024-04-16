import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import UserContext from '../../context/userContext';

function DashBoard() {
  const { user } = useContext(UserContext);
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    if (!user) return; // Exit early if user is not available

    const getAttendanceForUser = async () => {
      try {
        const response = await axios.get(
          "/api/v1/attendance/getattendance",
          { params: { userId: user._id } } // Pass userId as a query parameter
        );
        setAttendanceRecords(response.data);
      } catch (error) {
        console.error("Error fetching attendance records:", error);
      }
    };

    getAttendanceForUser();
  }, [user]); // Include user in the dependency array

  return (
    <div>
      <h1>Attendance Status</h1>
      {attendanceRecords.length === 0 ? (
        <div>No attendance records available</div>
      ) : (
        <ul>
          {attendanceRecords.map((attendanceRecord) => (
            <li key={attendanceRecord.id}>
              {attendanceRecord.date} - {attendanceRecord.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DashBoard;
