import React from "react";
import Landing from "./Landing/Landing";
import Quiz from "./Quiz/Quiz";
import "./App.scss";

export default function App() {
  const [isHidden, setIsHidden] = React.useState(false);

  function handleClick() {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  }

  const style = {
    display: isHidden ? "block" : "none",
  };

  return (
    <div className="container">
      <Landing isHidden={isHidden} fn={handleClick} />
      <Quiz style={style} />
    </div>
  );
}
