import React from "react";
import { useSearchParams } from "react-router-dom";

function withSearchParams(Component) {
  function WithSearchParams(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
      <Component
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        {...props}
      />
    );
  }
  return WithSearchParams;
}

export default withSearchParams;