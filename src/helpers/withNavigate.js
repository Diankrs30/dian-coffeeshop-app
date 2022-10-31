import React from "react";
import { useNavigate } from "react-router-dom";

function withNavigate(Component) {
  function WithNavigate(props) {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  }
  return WithNavigate;
}

export default withNavigate;