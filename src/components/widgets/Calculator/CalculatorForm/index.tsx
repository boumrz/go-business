import { Controller, useFormContext, useFieldArray } from "react-hook-form";
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

export const CalculatorForm = ({
  subindustryTransform,
  districts,
  capitalBuildings,
  buildings,
  industries,
  equipments,
  legalForm,
  onSubmit,
}: any) => {
  const { control, handleSubmit } = useFormContext();

  const { fields: fieldOthers, append: appendOthers } = useFieldArray({
    control,
    name: "otherType",
  });

  const { fields: fieldBuildings, append: appendBuildings } = useFieldArray({
    control,
    name: "typeBuild",
  });

  const { fields: fieldCapitals, append: appendCapital } = useFieldArray({
    control,
    name: "capitalType",
  });

  const { fields: fieldEquipments, append: appendEquipments } = useFieldArray({
    control,
    name: "equipmentType",
  });

  const handleAddOthers = () => {
    appendOthers({ type: "", value: "" });
  };

  const handleAddEquipments = () => {
    appendEquipments({ count: "", cost: "", type: "" });
  };

  const handleAddBuilding = () => {
    appendBuildings({ value: "", type: "" });
  };

  const handleAddCapitals = () => {
    appendCapital({ value: "", type: "" });
  };

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
            name="organizationalAndLegalForm"
            render={({ field: { ref, onChange, ...field } }) => (
              <Autocomplete
                options={[
                  { name: "OOO", label: "ООО" },
                  { name: "AO", label: "АО" },
                  { name: "IE", label: "ИП" },
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
                name="taxationSystemType"
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    options={[
                      { name: "general", label: "Общая" },
                      { name: "simplified", label: "Упрощенная" },
                      { name: "patent", label: "Патент" },
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
            name="industryId"
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
                name="subindustryId"
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
          <Typography
            sx={{
              width: { xs: "320px" },
              marginBottom: { xs: "-32px", md: "inherit" },
            }}
            variant="subtitle1"
          >
            Район
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          <MapComponent />
        </Grid>

        <Grid
          md={3}
          lg={3}
          xl={3}
          sx={{ display: { xs: "none", md: "inherit" } }}
          item
        ></Grid>
        <Grid
          md={7}
          lg={7}
          xl={7}
          sx={{
            width: { xs: "320px" },
            marginTop: "-40px",
          }}
          item
        >
          <Controller
            control={control}
            name="districts"
            render={({ field: { ref, onChange, ...field } }) => (
              <Autocomplete
                options={districts}
                onChange={(_, data) => onChange(data)}
                sx={{
                  width: "100%",
                  display: { xs: "inherit", md: "none" },
                }}
                multiple
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
          <Typography
            sx={{ width: { xs: "320px" }, marginTop: { md: "-48px" } }}
            variant="subtitle1"
          >
            Штатная численность сотрудников,чел
          </Typography>
        </Grid>
        <Grid
          md={7}
          lg={7}
          xl={7}
          sx={{ width: { xs: "320px" }, marginTop: { md: "-48px" } }}
          item
        >
          <Controller
            control={control}
            name="staffCount"
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
            name="averageSalary"
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
            name="areaOnRegions"
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
          {fieldBuildings.map((item: any, index: any) => (
            <Box
              key={item.key}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { md: "24px" },
              }}
            >
              <Controller
                control={control}
                name={`typeBuild.${index}.type`}
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    options={buildings}
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
                name={`typeBuild.${index}.value`}
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
          ))}
          <Button
            sx={{
              color: "#3A6CAB",
              paddingLeft: 0,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
            onClick={handleAddBuilding}
          >
            + Добавить объект
          </Button>
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Иные капитальные сооружения
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          {fieldCapitals.map((item: any, index: any) => (
            <Box
              key={item.key}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { md: "24px" },
              }}
            >
              <Controller
                control={control}
                name={`capitalType.${index}.type`}
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    options={capitalBuildings}
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
                name={`capitalType.${index}.value`}
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
          ))}
          <Button
            sx={{
              color: "#3A6CAB",
              paddingLeft: 0,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
            onClick={handleAddCapitals}
          >
            + Добавить объект
          </Button>
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Оборудование
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          {fieldEquipments.map((item: any, index: any) => (
            <Box
              key={item.key}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { md: "24px" },
              }}
            >
              <Controller
                control={control}
                name={`equipmentType.${index}.type`}
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    options={equipments}
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
                        label="Тип оборудования"
                      />
                    )}
                  />
                )}
              />
              <Controller
                control={control}
                name={`equipmentType.${index}.count`}
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
            </Box>
          ))}
          <Button
            sx={{
              color: "#3A6CAB",
              paddingLeft: 0,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
            onClick={handleAddEquipments}
          >
            + Добавить тип оборудования
          </Button>
        </Grid>
        <Grid md={3} lg={3} xl={3} item>
          <Typography sx={{ width: { xs: "320px" } }} variant="subtitle1">
            Иные потребности
          </Typography>
        </Grid>
        <Grid md={7} lg={7} xl={7} sx={{ width: { xs: "320px" } }} item>
          {fieldOthers.map((item: any, index: any) => (
            <Box
              key={item.key}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { md: "24px" },
              }}
            >
              <Controller
                control={control}
                name={`otherType.${index}.type`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{
                      minWidth: { md: "270px" },
                      maxWidth: { md: "294px" },
                    }}
                    type="text"
                    label="Потребность"
                    placeholder="1"
                  />
                )}
              />
            </Box>
          ))}
          <Button
            sx={{
              color: "#3A6CAB",
              paddingLeft: 0,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
            onClick={handleAddOthers}
          >
            + Добавить объект
          </Button>
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
