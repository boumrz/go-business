import { Controller, useFormContext } from "react-hook-form";
import { Box, TextField } from "@mui/material";

export const Confirm = () => {
  const { control } = useFormContext();

  return (
    <Box sx={{ display: { xs: "flex" }, flexDirection: { xs: "column" } }}>
      <Controller
        control={control}
        name="code"
        render={({ field }) => (
          <TextField
            type="password"
            label="Введите код подтверждения"
            placeholder="****"
            {...field}
          />
        )}
      />
    </Box>
  );
};
