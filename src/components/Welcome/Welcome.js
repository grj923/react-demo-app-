import React from "react";
function Welcome(props) {
  return (
    <div className="Welcome">
      <h1>Hello, {props.match.params.name}!</h1>
    </div>
  );
}
export default Welcome;
