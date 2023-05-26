import { Controller, useFormContext } from "react-hook-form";
import { Box, TextField } from "@mui/material";

export const PersonalData = () => {
  const { control } = useFormContext();

  return (
    <Box sx={{ display: { xs: "flex" }, flexDirection: { xs: "column" } }}>
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            type="text"
            label="Фамилия *"
            placeholder="Иванов"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField type="text" label="Имя *" placeholder="Иван" {...field} />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            type="email"
            label="Адрес эл. почты *"
            placeholder="ivanov@mail.ru"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextField type="password" label="Пароль" {...field} />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <TextField type="password" label="Подтверждение пароля" {...field} />
        )}
      />
    </Box>
  );
};
