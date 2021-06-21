import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import {auth} from './firebase';
import {useDispatch} from 'react-redux'

import Home from './pages/Home';
import About from './pages/About';
import BrokerService from './pages/BrokerService';
import Find from './pages/Find';
import Contact from './pages/Contact';
import Finance from './pages/Finance';
import SingleItem from './pages/SingleItem';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import RegisterComplete from './pages/auth/RegisterComplete';
import Login from './pages/auth/Login';
import {currentAdmin} from './functions/auth';
import PrivateRoute from "./components/routes/PrivateRoute";
import Dashboard from "./pages/admin/Dashboard";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import ProductCreate from "./pages/admin/product/ProductCreate";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import AllProducts from "./pages/admin/product/AllProducts";

function App() {

  const dispatch = useDispatch();

   // to check firebase auth state
   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (admin) => {
      if (admin) {
        const idTokenResult = await admin.getIdTokenResult();
        console.log("admin", admin);
        currentAdmin(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_ADMIN",
              payload: {
                email: res.email,
                token: idTokenResult.token,
                _id: res._id,
              },
            });
          })
          .catch(err=>console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);

  return (
    <>
    <Router>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/find' component={Find}/>
      <Route path='/finance' component={Finance}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/broker-service' component={BrokerService}/>
      <Route path='/product/:id' component={SingleItem}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register/complete' exact component={RegisterComplete}/>
      <Route path='/forgot/password' exact component={ForgotPassword}/>
      <PrivateRoute path='/admin/dashboard'  exact component={Dashboard}/>
      <PrivateRoute path='/admin/category' exact component={CategoryCreate}/>
      <PrivateRoute path='/admin/category/:slug' exact component={CategoryUpdate}/>
      <PrivateRoute path='/admin/sub' exact component={SubCreate}/>
      <PrivateRoute path='/admin/sub/:slug' exact component={SubUpdate}/>
      <PrivateRoute path='/admin/product' exact component={ProductCreate}/>
      <PrivateRoute path='/admin/products' exact component={AllProducts}/>
      <PrivateRoute path='/admin/product/:slug' exact component={ProductUpdate}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;