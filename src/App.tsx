import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { COLOR, MODE } from "./constants/constant";

function App() {
  const [mode, setMode] = useState(MODE.LIGHT);

  const handleTheme = () => {
    if (mode === MODE.DARK) {
      setMode(MODE.LIGHT);
      document.body.style.backgroundColor = COLOR.WHITE;
      document.body.style.color = COLOR.BLACK;
    } else {
      setMode(MODE.DARK);
      document.body.style.backgroundColor = COLOR.DARK_GREY;
      document.body.style.color = COLOR.WHITE;
    }
  };

  return (
    <>
      <Navbar title="Hello, World!" mode={mode} toggle={handleTheme} />
      <TextForm label="JUST TYPE : " mode={mode} />
    </>
  );
}

export default App;
