import { Typography, Box, Button, Grid } from "@mui/material";
import s from "./styles.module.css";

export const Results = () => {
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
        className={s.results}
      >
        <header className={s.count}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: { xs: "16px" },
              marginBottom: { xs: "16px", sm: "32px" },
              justifyContent: {
                xs: "flex-start",
                sm: "space-between",
              },
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
            }}
          >
            <Typography className={s.title} variant="h3">
              Параметры бизнеса
            </Typography>
            <Button variant="contained" type="button">
              Новый расчет
            </Button>
          </Box>
          <Typography className={s.title} variant="h2">
            120 000 000 – 137 000 000 руб.
          </Typography>
        </header>
        <Box alignItems="center">
          <Box
            sx={{
              paddingTop: "32px",
              paddingBottom: "28px",
              width: { xs: "320px" },
            }}
          >
            <Typography className={s.secondary} variant="body1">
              Структура затрат
            </Typography>
          </Box>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginBottom={5}
          >
            <Grid item xs={6} paddingBottom={1}>
              <Typography variant="body1">Капитальные вложения</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">104'980'000 руб.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={s.secondary} variant="body1">
                - Приобретение земельных участков
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">2'500'000 руб.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={s.secondary} variant="body1">
                - Строительство зданий
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">2'500'000 руб.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={s.secondary} variant="body1">
                - Прочие объекты капитального строительства
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">2'500'000 руб.</Typography>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginBottom={5}
          >
            <Grid item xs={6} paddingBottom={1}>
              <Typography variant="body1">
                Затраты на открытие производства
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">104'980'000 руб.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={s.secondary} variant="body1">
                - Приобретение оборудования
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">2'500'000 руб.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={s.secondary} variant="body1">
                - Найм персонала
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">2'500'000 руб.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={s.secondary} variant="body1">
                - Покупка патента
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">2'500'000 руб.</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button fullWidth variant="contained" type="button">
            Получить детализированный расчет
          </Button>
        </Box>
      </Box>
    </div>
  );
};
