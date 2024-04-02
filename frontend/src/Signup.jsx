import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/signup', { username, email, password });
      console.log(response.data); // Assuming response includes user data
      // Handle successful signup, show success message to user or redirect to login page
    } catch (error) {
      console.error('Signup failed:', error.response.data.error);
      // Handle signup failure, show error message to user
    }
  };

  return (
    <div className='signup-container'>
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
      <input type="text" 
      
placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br><br></br>
      <input type="email" 
placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
      <input type="password" 
      placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br><br></br>
     


      <button onClick={handleSignup}>SignUp</button>
      <p className="signu-link">Already have an account?<a href="/Login">Login</a></p>
   

      </form>
      
    </div>
    </div>
  );
};

export default Signup;



