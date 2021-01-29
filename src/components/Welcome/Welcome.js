import React from "react";
function Welcome(props) {
  let name = props.match.params.name || props.name;
  return (
    <div className="Welcome">
      <h1>Hello, {name}!</h1>
    </div>
  );
}
export default Welcome;
