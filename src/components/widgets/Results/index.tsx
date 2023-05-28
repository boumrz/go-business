import {
  Typography,
  Box,
  Button,
  Grid,
  Modal,
  CardContent,
  Card,
} from "@mui/material";
// @ts-ignore
import { LayerIcon, InfoIcon } from "@/assets/icons";
import { useMainContext } from "@/contexts";
import s from "./styles.module.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "16px",
  boxShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
  width: 824,
  overflow: "auto",
  height: "85%",
  bgcolor: "background.paper",
  border: "none",
};

export const Results = ({ isResult, handleResultModal }: any) => {
  const { calculationResults } = useMainContext();

  const handleGeneratePDF = () => {
    console.log("generatePDF");
  };

  return (
    <Modal
      open={isResult}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => handleResultModal(false)}
    >
      <Box sx={style}>
        <Box
          sx={{
            boxShadow: {
              xs: "none",
              sm: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
            },
            margin: "auto",
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
                Общий объем инвестиций составит
              </Typography>
            </Box>
            <Typography className={s.title} variant="h2">
              {calculationResults?.totalCostMinOfAll || "0"}&nbsp;–&nbsp;
              {calculationResults?.totalCostMaxOfAll || "0"}
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
              <Typography sx={{ color: "#3C4043" }} variant="body1">
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
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500 }}
                  variant="body1"
                >
                  Капитальные вложения
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.capitalInvestmentsTotalMinCost}
                  &nbsp;-&nbsp;
                  {calculationResults?.capitalInvestmentsTotalMaxCost}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={s.secondary} variant="body1">
                  - Строительство зданий
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.capitalInvestmentsTotalBuildingCost ||
                    ""}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={s.secondary} variant="body1">
                  - Прочие объекты капитального строительства
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.capitalInvestmentsCapitalTotalBuildingCost ||
                    ""}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              marginBottom={5}
            >
              <Grid item xs={6} paddingBottom={1}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500 }}
                  variant="body1"
                >
                  Затраты на открытие производства
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.costsOfOpeningProductionTotalCost}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={s.secondary} variant="body1">
                  - Приобретение оборудования
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.costsOfOpeningProductionEquipmentPurchasePriceTotalEquipmentCost ||
                    ""}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={s.secondary} variant="body1">
                  - Найм персонала
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.costsOfOpeningProductionHiringStaffTotalStaffCost ||
                    ""}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={s.secondary} variant="body1">
                  - Покупка патента
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.costsOfOpeningProductionPurchasePatentPatentCost ||
                    ""}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: "#EEF3FA",
              padding: "12px",
              marginBottom: "72px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#202124",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "64px",
                  marginBottom: "28px",
                }}
                color="text.secondary"
                gutterBottom
              >
                Последующие расходы, которые понесёт организация <br /> после
                начала работы (стоимость указана за 1 месяц) <InfoIcon />
              </Typography>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                marginBottom={5}
              >
                <Grid item xs={6} paddingBottom={1}>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 500 }}
                    variant="body1"
                  >
                    Оплата труда
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">104'980'000 руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    - Заработная плата
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {calculationResults?.totalSalaryPayment || ""}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    - Налоги
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
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 500 }}
                    variant="body1"
                  >
                    Прочие налоги
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">104'980'000 руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    - На землю
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000 руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    - На имущество
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000 руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    - Транспортный
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000 руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    - Прочие
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
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 500 }}
                    variant="body1"
                  >
                    Исходные расходы
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">104'980'000 руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    - Ведение бухгалтерского учёта
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {calculationResults?.accountingCost || ""}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px;",
            }}
          >
            <Button
              sx={{ backgroundColor: "#D31B2C" }}
              variant="contained"
              type="button"
              onClick={handleGeneratePDF}
            >
              Получить детализированный расчет
            </Button>
            <Button
              sx={{ backgroundColor: "#D31B2C" }}
              variant="contained"
              onClick={() => handleResultModal(false)}
              type="button"
            >
              Закрыть
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
