import { Controller, useFormContext } from "react-hook-form";
import { Box, TextField, Select, MenuItem } from "@mui/material";

export const Final = () => {
  const { control } = useFormContext();

  return (
    <Box sx={{ display: { xs: "flex" }, flexDirection: { xs: "column" } }}>
      <Controller
        control={control}
        name="companyName"
        render={({ field }) => (
          <TextField
            type="text"
            label="Наименование организации"
            placeholder="Иванов и компания"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="inn"
        render={({ field }) => (
          <TextField
            type="text"
            label="ИНН *"
            placeholder="1111111"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="site"
        render={({ field }) => (
          <TextField
            type="text"
            label="Адрес сайта"
            placeholder="ivanov.ru"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="industry"
        render={({ field }) => (
          <TextField type="text" label="Иванов и компания" {...field} />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField type="text" label="Страна" {...field} />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <TextField type="text" label="Город" {...field} />
        )}
      />
      <Controller
        control={control}
        name="job"
        render={({ field }) => (
          <TextField type="text" label="Генеральный директор" {...field} />
        )}
      />
    </Box>
  );
};
