import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { MainProvider, MapsProvider, AuthProvider } from "@/contexts";
import { router } from "./router";
import { store } from "./store/store";
import { theme } from "../theme.config.ts";
import "./assets/styles/style.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <MainProvider>
            <MapsProvider>
              <RouterProvider router={router} />
            </MapsProvider>
          </MainProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};
