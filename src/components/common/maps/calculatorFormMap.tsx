import { Controller } from "react-hook-form";
import {
  Select,
  MenuItem,
  InputLabel,
  Slider,
  RadioGroup,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import { MapComponent } from "@/components";

import s from "./styles.module.css";

function valuetext(value: number) {
  return `${value}°C`;
}

export const calculatorFormMap = ({
  name,
  name1,
  name2,
  name3,
  control,
  label,
  label1,
  label2,
  label3,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder,
}: any): Record<string, JSX.Element> => ({
  industry: (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id={name}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            sx={{ width: "100%" }}
            labelId={name}
            label={label}
            {...field}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  ),
  maps: <MapComponent />,
  counter: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          sx={{ width: { xs: "100%", md: "294px" } }}
          type="text"
          label={label}
          placeholder={placeholder}
          {...field}
        />
      )}
    />
  ),
  average: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          sx={{ width: { xs: "100%", md: "294px" } }}
          type="text"
          label={label}
          placeholder={placeholder}
          {...field}
        />
      )}
    />
  ),
  legalForm: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup {...field}>
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Option 3"
          />
        </RadioGroup>
      )}
    />
  ),
  taxType: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup {...field}>
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Option 3"
          />
        </RadioGroup>
      )}
    />
  ),
  area: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          sx={{ width: { xs: "100%", md: "188px" } }}
          type="text"
          label={label}
          placeholder={placeholder}
          {...field}
        />
      )}
    />
  ),
  object: (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { md: "24px" },
      }}
    >
      <FormControl>
        <InputLabel id={name1}>{label1}</InputLabel>
        <Controller
          control={control}
          name={name1}
          render={({ field }) => (
            <Select
              sx={{ minWidth: { md: "270px" }, maxWidth: { md: "294px" } }}
              labelId={name1}
              placeholder={placeholder1}
              label={label1}
              {...field}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Controller
        control={control}
        name={name2}
        render={({ field }) => (
          <TextField
            sx={{ width: { xs: "100%", md: "188px", lg: "230px" } }}
            type="text"
            label={label2}
            placeholder={placeholder2}
            {...field}
          />
        )}
      />
    </Box>
  ),
  capital: (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { md: "24px" },
      }}
    >
      <FormControl>
        <InputLabel id={name1}>{label1}</InputLabel>
        <Controller
          control={control}
          name={name1}
          render={({ field }) => (
            <Select
              sx={{ minWidth: { md: "270px" }, maxWidth: { md: "294px" } }}
              labelId={name1}
              placeholder={placeholder1}
              label={label1}
              {...field}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Controller
        control={control}
        name={name2}
        render={({ field }) => (
          <TextField
            sx={{ width: { xs: "100%", md: "188px", lg: "230px" } }}
            type="text"
            label={label2}
            placeholder={placeholder2}
            {...field}
          />
        )}
      />
    </Box>
  ),
  equipment: (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
      }}
    >
      <FormControl>
        <InputLabel id={name1}>{label1}</InputLabel>
        <Controller
          control={control}
          name={name1}
          render={({ field }) => (
            <Select
              sx={{ width: "100%" }}
              labelId={name1}
              placeholder={placeholder1}
              label={label1}
              {...field}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { md: "24px" },
        }}
      >
        <Controller
          control={control}
          name={name2}
          render={({ field }) => (
            <TextField
              sx={{ minWidth: "188px" }}
              type="text"
              label={label2}
              placeholder={placeholder2}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={name3}
          render={({ field }) => (
            <TextField
              sx={{ width: "100%" }}
              type="text"
              label={label3}
              placeholder={placeholder3}
              {...field}
            />
          )}
        />
      </Box>
    </Box>
  ),
  other: (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { md: "24px" },
      }}
    >
      <FormControl>
        <InputLabel id={name1}>{label1}</InputLabel>
        <Controller
          control={control}
          name={name1}
          render={({ field }) => (
            <Select
              sx={{ minWidth: { md: "270px" }, maxWidth: { md: "294px" } }}
              labelId={name1}
              placeholder={placeholder1}
              label={label1}
              {...field}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Controller
        control={control}
        name={name2}
        render={({ field }) => (
          <TextField
            sx={{ width: { xs: "100%", md: "188px", lg: "230px" } }}
            type="text"
            label={label2}
            placeholder={placeholder2}
            {...field}
          />
        )}
      />
    </Box>
  ),
});
