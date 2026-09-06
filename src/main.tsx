import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
// import ThemeProvider from "./Context/ThemeContextProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
