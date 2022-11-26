import React from "react";
import './ErrorNotice.css'

const ErrorNotice = (props) => {
  return (
    <div className="error-notice">
      <span>{props.message}</span>
    </div>
  );
}

export default ErrorNotice