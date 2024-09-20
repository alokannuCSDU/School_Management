import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/students')
      .then(response => setStudents(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
