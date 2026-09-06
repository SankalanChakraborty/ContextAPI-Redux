import Detail from "./Components/Detail";
import { useTheme } from "./Context/themeContext";

function App() {
  const themeContext = useTheme();

  return (
    <>
      <Detail />
      <button onClick={themeContext?.toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
