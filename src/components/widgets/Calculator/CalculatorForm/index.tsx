import { Controller, useFormContext } from "react-hook-form";
import {
  Typography,
  Box,
  Grid,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { MapComponent } from "@/components";
import s from "../styles.module.css";

const top100Films = [
  { name: "123", label: "The Shawshank Redemption", year: 1994 },
  { name: "efdsf", label: "The Godfather", year: 1972 },
  { name: "hgghg", label: "The Godfather: Part II", year: 1974 },
  { name: "wr", label: "The Dark Knight", year: 2008 },
  { name: "vc", label: "12 Angry Men", year: 1957 },
];

export const CalculatorForm = ({
  subindustryTransform,
  districts,
  industries,
  equipments,
  legalForm,
  onSubmit,
}: any) => {
  const { control, handleSubmit } = useFormContext();
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.title} variant="h3">
        Параметры бизнеса
      </Typography>

      <Grid
        container
        sx={{
          gap: { xs: "32px" },
          justifyContent: { sm: "space-between" },
        }}
      >
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Организационно-правовая форма
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Controller
            control={control}
            name="legalForm"
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
                  <TextField
                    {...params}
                    {...field}
                    inputRef={ref}
                    label="Организационно-правовая форма"
                  />
                )}
              />
            )}
          />
        </Grid>
        {legalForm && (
          <>
            <Grid md={3} lg={3} xl={3} item></Grid>
            <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
              <Controller
                control={control}
                name="taxType"
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
                      <TextField
                        {...params}
                        {...field}
                        inputRef={ref}
                        label="Тип налогооблажения"
                      />
                    )}
                  />
                )}
              />
            </Grid>
          </>
        )}
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Отрасль
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Controller
            control={control}
            name="industry"
            render={({ field: { ref, onChange, ...field } }) => (
              <Autocomplete
                options={industries}
                onChange={(_, data) => onChange(data)}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...field}
                    inputRef={ref}
                    label="Область производства"
                  />
                )}
              />
            )}
          />
        </Grid>
        {subindustryTransform.length > 0 && (
          <>
            <Grid md={3} lg={3} xl={3} item></Grid>
            <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
              <Controller
                control={control}
                name="subindustry"
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
                        label="Подотрасль"
                      />
                    )}
                  />
                )}
              />
            </Grid>
          </>
        )}
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Район
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <MapComponent />
        </Grid>
        <Grid md={3} lg={3} xl={3} item></Grid>
        <Grid
          md={7}
          lg={7}
          xl={7}
          sx={{ width: { xs: "320px" }, marginTop: "-40px" }}
          item
        >
          <Controller
            control={control}
            name="districts"
            render={({ field: { ref, onChange, ...field } }) => (
              <Autocomplete
                options={districts}
                onChange={(_, data) => onChange(data)}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...field}
                    inputRef={ref}
                    label="Округ"
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Штатная численность сотрудников,чел
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Controller
            control={control}
            name="counter"
            render={({ field }) => (
              <TextField
                sx={{ width: { xs: "100%", md: "294px" } }}
                type="text"
                label="Число сотрудников, чел"
                placeholder="100"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Средняя заработная плата
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Controller
            control={control}
            name="average"
            render={({ field }) => (
              <TextField
                sx={{ width: { xs: "100%", md: "294px" } }}
                type="text"
                label="Заработная плата, руб"
                placeholder="100"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Площадь земельного участка, м. кв.
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Controller
            control={control}
            name="area"
            render={({ field }) => (
              <TextField
                sx={{ width: { xs: "100%", md: "188px" } }}
                type="text"
                label="Площадь, м.кв"
                placeholder="10 000"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Тип и площадь объектов недвижимости
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { md: "24px" },
            }}
          >
            <Controller
              control={control}
              name="typeBuild"
              render={({ field: { ref, onChange, ...field } }) => (
                <Autocomplete
                  options={top100Films}
                  onChange={(_, data) => onChange(data)}
                  sx={{
                    minWidth: { md: "270px" },
                    maxWidth: { md: "294px" },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...field}
                      inputRef={ref}
                      label="Тип здания"
                    />
                  )}
                />
              )}
            />

            <Controller
              control={control}
              name="squareBuild"
              render={({ field }) => (
                <TextField
                  sx={{ width: { xs: "100%", md: "188px", lg: "230px" } }}
                  type="text"
                  label="Площадь, м.кв."
                  placeholder="1 000"
                  {...field}
                />
              )}
            />
          </Box>
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Иные капитальные сооружения
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { md: "24px" },
            }}
          >
            <Controller
              control={control}
              name="capitalType"
              render={({ field: { ref, onChange, ...field } }) => (
                <Autocomplete
                  options={top100Films}
                  onChange={(_, data) => onChange(data)}
                  sx={{
                    minWidth: { md: "270px" },
                    maxWidth: { md: "294px" },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...field}
                      inputRef={ref}
                      label="Тип здания"
                    />
                  )}
                />
              )}
            />

            <Controller
              control={control}
              name="capitalSquare"
              render={({ field }) => (
                <TextField
                  sx={{ width: { xs: "100%", md: "188px", lg: "230px" } }}
                  type="text"
                  label="Площадь, м.кв."
                  placeholder="1 000"
                  {...field}
                />
              )}
            />
          </Box>
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Оборудование
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
            }}
          >
            <Controller
              control={control}
              name="equipmentType"
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
                      label="Тип оборудования"
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
                name="equipmentQuantity"
                render={({ field }) => (
                  <TextField
                    sx={{ minWidth: "188px" }}
                    type="text"
                    label="Кол-во, шт"
                    placeholder="1"
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="equipmentCount"
                render={({ field }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    type="text"
                    label="Цена"
                    placeholder="1 000 000"
                    {...field}
                  />
                )}
              />
            </Box>
          </Box>
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Иные потребности
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { md: "24px" },
            }}
          >
            <Controller
              control={control}
              name="otherType"
              render={({ field: { ref, onChange, ...field } }) => (
                <Autocomplete
                  options={top100Films}
                  onChange={(_, data) => onChange(data)}
                  sx={{
                    minWidth: { md: "270px" },
                    maxWidth: { md: "294px" },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...field}
                      inputRef={ref}
                      label="Иное 1"
                    />
                  )}
                />
              )}
            />

            <Controller
              control={control}
              name="otherSquare"
              render={({ field }) => (
                <TextField
                  sx={{ width: { xs: "100%", md: "188px", lg: "230px" } }}
                  type="text"
                  label="Площадь, м.кв."
                  placeholder="200"
                  {...field}
                />
              )}
            />
          </Box>
        </Grid>
      </Grid>
      <Button
        sx={{ backgroundColor: "#D31B2C" }}
        type="submit"
        variant="contained"
      >
        Рассчитать
      </Button>
    </form>
  );
};
