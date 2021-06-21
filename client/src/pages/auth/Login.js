import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css'; 
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import axios from 'axios'

const createOrUpdateAdmin = async (authtoken) => {
  return await axios.post(
    "http://localhost:8000/api/create-or-update-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

const Login = ({ history }) => {
  const [email, setEmail] = useState("leylana@code.edu.az");
  const [password, setPassword] = useState("654321");

  const {admin}= useSelector((state)=>({...state}));

  useEffect(()=>{
    if(admin && admin.token) history.push("/admin/dashboard")
  })

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log("result",result);
      const { admin } = result;
      const idTokenResult = await admin.getIdTokenResult();
      console.log("idtoken",idTokenResult)

      createOrUpdateAdmin(idTokenResult.token)
      .then(res=>dispatch({
        type: "LOGGED_IN_ADMIN",
        payload: {
          email: res.data.email,
          token: idTokenResult.token,
          _id: res.data._id
        },
      }))
      .catch();
       history.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </div>

      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
      <Link to="forgot/password" className="float-right text-danger">Forgot Password ?</Link>
    </form>
  );

  return (
    <div className="container p-5">
      <ToastContainer/>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;