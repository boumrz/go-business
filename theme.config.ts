import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 600,
          textTransform: "none",
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#f5f5f5",
          },
          "& fieldset": {
            borderRadius: 4,
          },
          "&:hover fieldset": {
            borderColor: "rgba(0, 0, 0, 0.1)",
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2,
            borderColor: "#2196f3",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: 16,
          color: "rgba(29, 27, 32, 0.4)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#1D1B20",
        },
        icon: {
          color: "rgba(0, 0, 0, 0.54)",
        },
      },
    },
  },
});
