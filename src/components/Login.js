import React, {useState} from "react";
import './Login.css';

const Login = ()=>{
  const [role, setRole]= useState('student');
  const [credentials, setCredentials] = useState({username: '', password: ''});
  
  const handleLogin = (e) => {
    e.preventDefault();

    alert(`Logging in as ${role}`);
  };

  return (
    <div className="login-page">
      <h2>Login as {role}</h2>
      <form onSubmit={handleLogin}>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin"> Admin </option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Faculty">Faculty</option>

          </select>
        </label>
        <label>
          Username:
          <input type="text" value={credentials.username} onChange={(e)=> setCredentials({...credentials, username: e.target.value})}/>
        </label>
        <label>
          Password:
          <input type="text" value={credentials.password} onChange={(e)=> setCredentials({...credentials, password: e.target.value})}/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;