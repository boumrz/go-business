import { Controller } from "react-hook-form";
import {
  Select,
  MenuItem,
  InputLabel,
  Slider,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";

import s from "./styles.module.css";

function valuetext(value: number) {
  return `${value}°C`;
}

export const calculatorFormMap = ({
  name,
  control,
  label1,
  label2,
  label,
}: any): Record<string, JSX.Element> => ({
  industry: (
    <FormControl>
      <InputLabel id={name}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            labelId={name}
            className={s.muiComponent}
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
  counter: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Slider
          className={s.muiComponent}
          defaultValue={50}
          getAriaValueText={valuetext}
          aria-label="Default"
          valueLabelDisplay="on"
          {...field}
        />
      )}
    />
  ),
  landArea: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Slider
          className={s.muiComponent}
          defaultValue={50}
          getAriaValueText={valuetext}
          aria-label="Default"
          valueLabelDisplay="on"
          {...field}
        />
      )}
    />
  ),
  landObjects: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Slider
          className={s.muiComponent}
          defaultValue={50}
          aria-label="Default"
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          {...field}
        />
      )}
    />
  ),
  equipment: (
    <FormControl>
      <InputLabel id="equipment">{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            labelId="equipment"
            className={s.muiComponent}
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
  object: (
    <div className={s.fieldset}>
      <FormControl>
        <InputLabel id="object-type">{label1}</InputLabel>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              labelId="object-type"
              label={label1}
              className={s.muiComponent}
              {...field}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormControl>
        <InputLabel id="object-square">{label2}</InputLabel>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              labelId="object-square"
              label={label2}
              className={s.muiComponent}
              {...field}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </div>
  ),
  accounting: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup className={s.muiComponent} row {...field}>
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
  patent: (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup className={s.muiComponent} row {...field}>
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
  other: (
    <FormControl>
      <InputLabel id="other">{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            labelId="other"
            label={label}
            className={s.muiComponent}
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
});
