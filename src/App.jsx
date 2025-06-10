import { useEffect } from "react";
import "./App.scss";
import Router from "./routes/router";

function App() {
  useEffect(() => {
    // Disable context menu
    const disableContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableContextMenu);

    // Log window dimensions
    console.log(window.innerWidth, window.innerHeight);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);
  return (
    <Router />
  );
}

export default App;
