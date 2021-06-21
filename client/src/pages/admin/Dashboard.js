import React, { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav";
import AdminHeader from "../../components/AdminHeader";
import { getProductsByCount } from "../../functions/product";
import AdminProductCard from "../../components/cards/AdminProductCard";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
    <AdminHeader/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
         
        Admin Dashboard
        </div>
      </div>
    </div>
 
 </> );
};

export default Dashboard;
