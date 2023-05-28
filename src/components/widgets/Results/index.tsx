import {
  Typography,
  Box,
  Button,
  Grid,
  Modal,
  CardContent,
  Card,
} from "@mui/material";
import { Close } from "@mui/icons-material";
// @ts-ignore
import { LayerIcon, InfoIcon } from "@/assets/icons";
import { useMainContext } from "@/contexts";
import s from "./styles.module.css";

const style = {
  position: "absolute" as "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "16px",
  boxShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
  width: { xs: "320px", sm: "480px", md: "824px" },
  overflow: "auto",
  height: "90%",
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
            position: "absolute",
            right: "32px",
            top: "24px",
            zIndex: 100000,
          }}
        >
          <Close
            sx={{ cursor: "pointer" }}
            onClick={() => handleResultModal(false)}
          />
        </Box>
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
            <Typography
              sx={{
                fontSize: { xs: "24px !important", sm: "36px !important" },
              }}
              className={s.title}
              variant="h2"
            >
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
              sx={{ display: { xs: "grid", sm: "flex" } }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              marginBottom={5}
            >
              <Grid item xs={6} paddingBottom={1}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500 }}
                  variant="body1"
                >
                  Капитальные&nbsp;вложения
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {calculationResults?.capitalInvestmentsTotalMinCost || "0"}
                  &nbsp;-&nbsp;
                  {calculationResults?.capitalInvestmentsTotalMaxCost || "0"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={s.secondary} variant="body1">
                  -&nbsp;Строительство зданий
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
                  -&nbsp;Прочие объекты капитального строительства
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
              sx={{ display: { xs: "grid", sm: "flex" } }}
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
                  -&nbsp;Приобретение оборудования
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
                  -&nbsp;Найм персонала
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
                  -&nbsp;Покупка патента
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
              backgroundColor: "#EEF3FA",
              padding: "12px",
              marginBottom: "72px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 20 },
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
                начала работы (стоимость указана за 1 месяц){" "}
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: 20,
                    height: 20,
                  }}
                >
                  <InfoIcon style={{ width: 20, height: 20 }} />
                </Box>
              </Typography>
              <Grid
                container
                sx={{ display: { xs: "grid", sm: "flex" } }}
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
                  <Typography variant="body1">104'980'000&nbsp;руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    -&nbsp;Заработная плата
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {calculationResults?.totalSalaryPayment || ""}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    -&nbsp;Налоги
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000&nbsp;руб.</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                rowSpacing={2}
                sx={{ display: { xs: "grid", sm: "flex" } }}
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
                  <Typography variant="body1">104'980'000&nbsp;руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    -&nbsp;На землю
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000&nbsp;руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    -&nbsp;На имущество
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000&nbsp;руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    -&nbsp;Транспортный
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000&nbsp;руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    -&nbsp;Прочие
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">2'500'000&nbsp;руб.</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ display: { xs: "grid", sm: "flex" } }}
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                marginBottom={5}
              >
                <Grid item xs={6} paddingBottom={1}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                    variant="body1"
                  >
                    Исходные расходы
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">104'980'000&nbsp;руб.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={s.secondary} variant="body1">
                    -&nbsp;Ведение бухгалтерского учёта
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
              flexDirection: { xs: "column", md: "row" },
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
