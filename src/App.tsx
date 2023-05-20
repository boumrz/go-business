import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { MainProvider } from "@/contexts";
import { router } from "./router";
import { store } from "./store/store";
import { theme } from "../theme.config.ts";
import "./assets/styles/style.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainProvider>
          <RouterProvider router={router} />
        </MainProvider>
      </ThemeProvider>
    </Provider>
  );
};
