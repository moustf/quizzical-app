import React from "react";
import Landing from "./Landing/Landing";
import "./App.scss";

export default function App() {
  const [isHidden, setIsHidden] = React.useState(false);

  function handleClick() {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  }

  return (
    <div className="container">
      <Landing isHidden={isHidden} fn={handleClick} />
    </div>
  );
}
