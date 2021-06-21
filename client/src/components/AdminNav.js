import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import './style/Admin.css'


const AdminNav = () => (
  <div className="navAdmin">
  <nav>
    <ToastContainer/>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
          Create New car
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
          All cars
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
          Make
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
         Model
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Add new admin
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/password" className="nav-link">
          Password
        </Link>
      </li>
    </ul>
  </nav>
  </div>
);

export default AdminNav;
