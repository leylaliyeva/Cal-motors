import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = ({ children, ...rest }) => {
  const { admin } = useSelector((state) => ({ ...state }));

  return admin && admin.token ? (
    <Route {...rest} render={() => children} />
  ) : (
    <h1 className="text-dagner">Loading...</h1>
  );
};

export default Private;
