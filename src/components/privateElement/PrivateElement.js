import React from "react";
import { Navigate } from "react-router-dom";

class PrivateElement extends React.Component {
  render() {
    const { allowedRoles = [], children } = this.props;
    const userInfo = JSON.parse(localStorage["login"] || "{}");
    if (!userInfo.token) {
      return (
        <Navigate
          to="/login"
          replace={true}
          state={{ msg: "Please you have to login first", isRedirected: true }}
        />
      );
    }
    if (allowedRoles.length > 0)
      if (!allowedRoles.includes(userInfo.role))
        return (
          <Navigate
            to="/"
            replace={true}
            state={{
              msg: "forbiden",
              isRedirected: true,
            }}
          />
        );
    return children;
  }
}

export default PrivateElement;
