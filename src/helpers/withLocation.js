import React from "react";
import { useLocation } from "react-router-dom";

function withLocation(Component) {
  function WithLocation(props) {
    const location = useLocation();
    return <Component location={location} {...props} />;
  }
  return WithLocation;
}

export default withLocation;