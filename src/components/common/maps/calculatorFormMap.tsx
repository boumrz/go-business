import { Controller } from "react-hook-form";
import { Autocomplete, TextField, Box } from "@mui/material";
import { MapComponent } from "@/components";

const top100Films = [
  { name: "123", label: "The Shawshank Redemption", year: 1994 },
  { name: "efdsf", label: "The Godfather", year: 1972 },
  { name: "hgghg", label: "The Godfather: Part II", year: 1974 },
  { name: "wr", label: "The Dark Knight", year: 2008 },
  { name: "vc", label: "12 Angry Men", year: 1957 },
];

export const calculatorFormMap = ({
  control,
  name,
  name1,
  name2,
  name3,
  label,
  label1,
  label2,
  label3,
  placeholder2,
  placeholder3,
  placeholder,
  equipments,
  industries,
  subindustryTransform,
  legalForm,
}: any): Record<string, JSX.Element | null> => {
  return {
    industry: (
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, ...field } }) => (
          <Autocomplete
            options={industries}
            onChange={(_, data) => onChange(data)}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} {...field} inputRef={ref} label={label} />
            )}
          />
        )}
      />
    ),
    subindustry:
      subindustryTransform.length > 0 ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              options={subindustryTransform}
              onChange={(_, data) => onChange(data)}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  inputRef={ref}
                  label={label}
                />
              )}
            />
          )}
        />
      ) : null,
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
        render={({ field: { ref, onChange, ...field } }) => (
          <Autocomplete
            options={[
              { name: "ООО", label: "ООО" },
              { name: "АО", label: "АО" },
              { name: "ИП", label: "ИП" },
            ]}
            onChange={(_, data) => onChange(data)}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} {...field} inputRef={ref} label={label} />
            )}
          />
        )}
      />
    ),
    taxType: legalForm && (
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, ...field } }) => (
          <Autocomplete
            options={[
              { name: "Общая", label: "Общая" },
              { name: "Упрощенная", label: "Упрощенная" },
              { name: "ЕСХН", label: "ЕСХН" },
              { name: "Патент", label: "Патент" },
            ]}
            onChange={(_, data) => onChange(data)}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} {...field} inputRef={ref} label={label} />
            )}
          />
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
        <Controller
          control={control}
          name={name1}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              options={top100Films}
              onChange={(_, data) => onChange(data)}
              sx={{ minWidth: { md: "270px" }, maxWidth: { md: "294px" } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  inputRef={ref}
                  label={label1}
                />
              )}
            />
          )}
        />

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
        <Controller
          control={control}
          name={name1}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              options={top100Films}
              onChange={(_, data) => onChange(data)}
              sx={{ minWidth: { md: "270px" }, maxWidth: { md: "294px" } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  inputRef={ref}
                  label={label1}
                />
              )}
            />
          )}
        />

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
        <Controller
          control={control}
          name={name1}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              options={equipments}
              onChange={(_, data) => onChange(data)}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  inputRef={ref}
                  label={label1}
                />
              )}
            />
          )}
        />

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
        <Controller
          control={control}
          name={name1}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              options={top100Films}
              onChange={(_, data) => onChange(data)}
              sx={{ minWidth: { md: "270px" }, maxWidth: { md: "294px" } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  inputRef={ref}
                  label={label1}
                />
              )}
            />
          )}
        />

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
  };
};
