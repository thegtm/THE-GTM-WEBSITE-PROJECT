import React, { useState } from 'react';
import './SignIn.css'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');
  const handleSignIn = async () => {
    const userData = {
      email: email,
      password: password,
    };

    // Send a POST request to your backend endpoint with user data
    try {
      const response = await fetch("http://localhost:3000/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Signin successful!");
        setEmail("");
        setPassword("");
      } else {
        alert("Signin failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />


        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        
        <button type="submit" onClick = {handleSignIn}>Submit</button>
        <div class="links-container">
            <a href="/register" class="link">Don't have an account?</a>
            <a href="/reset-password" class="link">Reset Password</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
