import Detail from "./Components/Detail";
import { useTheme } from "./Context/themeContext";
import { useContext } from "react";

function App() {
  const themeContext = useContext(useTheme());

  return (
    <>
      <Detail />
      <button onClick={themeContext?.toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
