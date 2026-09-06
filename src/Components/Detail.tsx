import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

const Detail = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: themeContext.theme === "light" ? "#fff" : "#333",
        color: themeContext.theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2>Detail Page</h2>
      <p>This is the detail page content.</p>
    </div>
  );
};

export default Detail;
