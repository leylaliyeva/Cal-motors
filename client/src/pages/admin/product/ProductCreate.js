import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";
import AdminHeader from "../../../components/AdminHeader";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import FileUpload from "../../../components/forms/FileUpload";
import {  getCategories, getCategorySubs} from "../../../functions/category";

const initialState = {
  title: "",
  descriptioin: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  condition: "",
  year: "",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  color: "",
  mileage: "",
  engine: "",
  fuel: "",
  carfax: ""
};

const ProductCreate = ({history}) => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);


   // redux
   const { admin } = useSelector((state) => ({ ...state }));

   useEffect(() => {
     loadCategories();
   }, []);
 
   const loadCategories = () =>
     getCategories().then((c) => setValues({...values, categories:c.data}));
 
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, admin.token)
      .then((res) => {
        toast.success(`"${res.data.title}" is created`);
        history.push("/admin/products");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setValues({ ...values, category: e.target.value, subs: [] });
    getCategorySubs(e.target.value).then((res) => {
      setSubOptions(res.data);
    });
    setShowSub(true)
  };
  return (
      <>
      <AdminHeader/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10 container">
          <h4>Create new car</h4>
          <hr />
          
          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            handleCategoryChange={handleCategoryChange}
            subOptions={subOptions}
            showSub={showSub}
          />
        </div>
      </div>
    </div>
  
  </>);
};

export default ProductCreate;
