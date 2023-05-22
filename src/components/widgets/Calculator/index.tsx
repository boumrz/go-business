import { useForm } from "react-hook-form";
import { Typography, Button, Box, Grid } from "@mui/material";
import { calculatorFormMap, calculatorConfig } from "@/components";
import s from "./styles.module.css";

export const Calculator = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      industry: "Option 1",
      select2: "option2",
    },
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className={s.wrapper}>
      <section className={s.header}>
        <Typography className={s.title} variant="h2">
          Онлайн калькулятор
        </Typography>
        <Typography className={s.title} variant="body1">
          Расчёт объема возможных затрат
        </Typography>
      </section>
      <Box
        sx={{
          width: { xs: "320px", sm: "400px", md: "800px", lg: "900px" },
          boxShadow: {
            xs: "none",
            sm: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
          },
        }}
        className={s.calculator}
      >
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Typography className={s.title} variant="h3">
            Параметры бизнеса
          </Typography>

          {calculatorConfig.map(
            ({
              label,
              label1,
              label2,
              label3,
              name,
              name1,
              name2,
              name3,
              title,
              placeholder1,
              placeholder2,
              placeholder3,
              placeholder,
              type,
              description,
            }) => {
              return (
                <Grid
                  container
                  sx={{
                    gap: { xs: "32px" },
                    justifyContent: { sm: "space-between" },
                  }}
                >
                  <Grid md={3} lg={3} xl={3} item>
                    <Typography
                      sx={{ width: { xs: "320px" } }}
                      variant="subtitle1"
                    >
                      {title}
                    </Typography>
                    {description && (
                      <Box sx={{ width: { xs: "320px" } }}>
                        <Typography className={s.secondary} variant="body1">
                          {description}
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                  <Grid
                    md={7}
                    lg={7}
                    xl={7}
                    sx={{ width: { xs: "320px" } }}
                    item
                  >
                    {
                      calculatorFormMap({
                        label1,
                        label2,
                        label3,
                        label,
                        placeholder1,
                        placeholder2,
                        placeholder3,
                        name,
                        name1,
                        name2,
                        name3,
                        title,
                        type,
                        placeholder,
                        description,
                        control,
                      })[name ?? ""]
                    }
                  </Grid>
                </Grid>
              );
            }
          )}
          <Button type="submit">Рассчитать</Button>
        </form>
      </Box>
    </div>
  );
};
