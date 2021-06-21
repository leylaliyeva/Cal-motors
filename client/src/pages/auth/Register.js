import React, {useState, useEffect} from 'react';
import { auth } from '../../firebase';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useSelector } from "react-redux";


const Register = ({history}) =>{
  const [email, setEmail]=useState("");
  const {admin}= useSelector((state)=>({...state}));


  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save admin email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };
  const btnStyle = {
    border: '1 px solid black',
    backgroundColor: '#e7e7e7',
    color:'black',
    marginTop:'5px',
    boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)`
  }
   const registerForm = () => (
       <form onSubmit={handleSubmit}>
         <input
           type="email"
           className="form-control"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           autoFocus
         />
         <button type="submit" className="btn btn-raised" style={btnStyle}>
           Register
         </button>
       </form>
    );
    
      return (
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>Register</h4>
              <ToastContainer />
              {registerForm()}
            </div>
          </div>
        </div>
      );
}

export default Register;