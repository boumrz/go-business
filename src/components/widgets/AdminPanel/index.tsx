import { SyntheticEvent, useState } from "react";
import { Box, Stack, Chip, Typography } from "@mui/material";
import { Users, Calculations, Counting } from "@/components";
import {
  UsersIcon,
  StatisticsIcon,
  //@ts-ignore
} from "@/assets/icons";
import s from "./styles.module.css";

const createDataUsers = (inn: string, email: string) => {
  return { inn, email };
};

const createDataCalculation = (date: string, user: string, amount: string) => {
  return { date, user, amount };
};

// const createDataStatistics = (
//   statistic1: string,
//   statistic2: string,
//   statistic3: string
// ) => {
//   return { statistic1, statistic2, statistic3 };
// };

const rows = [
  createDataUsers("770666666666", "ivanov@mail.ru"),
  createDataUsers("770666666666", "ivanov@mail.ru"),
  createDataUsers("770666666666", "ivanov@mail.ru"),
];

const createDataCounting = (data1: string, data2: string, data3: string) => {
  return { data1, data2, data3 };
};

// const statistics = [
//   createDataStatistics("Статистика 1", "Статистика 2", "Статистика 3"),
//   createDataStatistics("Статистика 1", "Статистика 2", "Статистика 3"),
//   createDataStatistics("Статистика 1", "Статистика 2", "Статистика 3"),
// ];

const counting = [
  createDataCounting("Данные 1", "Данные 2", "Данные 3"),
  createDataCounting("Данные 1", "Данные 2", "Данные 3"),
  createDataCounting("Данные 1", "Данные 2", "Данные 3"),
];

const calculations = [
  createDataCalculation(
    "25.03.2023",
    "Незарегистрированный",
    "от ... до ... млн. руб"
  ),
  createDataCalculation(
    "25.03.2023",
    "Незарегистрированный",
    "от ... до ... млн. руб"
  ),
  createDataCalculation(
    "25.03.2023",
    "Незарегистрированный",
    "от ... до ... млн. руб"
  ),
];

export const AdminPanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  return (
    <Box sx={{ paddingTop: "16px", paddingLeft: "64px", paddingRight: "64px" }}>
      <Box>
        <Stack sx={{ marginBottom: "60px" }} direction="row" spacing={1}>
          <Chip
            sx={{
              backgroundColor: value === 0 ? "#EEF3FA" : "white",
              border: value === 0 ? "" : "1px solid #CFD0D2",
              padding: "4px 8px 4px 8px",
            }}
            size="small"
            onClick={(event: any) => handleChange(event, 0)}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <UsersIcon />{" "}
                <Typography
                  sx={{
                    fontSize: 14,
                    color: value === 0 ? "#3A6CAB" : "#5F6368",
                  }}
                >
                  Пользователи
                </Typography>
              </Box>
            }
          />
          {/* <Chip
            sx={{
              backgroundColor: value === 1 ? "#EEF3FA" : "white",
              border: value === 1 ? "" : "1px solid #CFD0D2",
              padding: "4px 8px 4px 8px",
            }}
            size="small"
            onClick={(event: any) => handleChange(event, 1)}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CountingIcon />{" "}
                <Typography
                  sx={{
                    fontSize: 14,
                    color: value === 1 ? "#3A6CAB" : "#5F6368",
                  }}
                >
                  История расчетов
                </Typography>
              </Box>
            }
          /> */}
          <Chip
            sx={{
              backgroundColor: value === 2 ? "#EEF3FA" : "white",
              border: value === 2 ? "" : "1px solid #CFD0D2",
              padding: "4px 8px 4px 8px",
            }}
            size="small"
            onClick={(event: any) => handleChange(event, 2)}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <StatisticsIcon />{" "}
                <Typography
                  sx={{
                    fontSize: 14,
                    color: value === 2 ? "#3A6CAB" : "#5F6368",
                  }}
                >
                  Статистика
                </Typography>
              </Box>
            }
          />
          {/* <Chip
            sx={{
              backgroundColor: value === 3 ? "#EEF3FA" : "white",
              border: value === 3 ? "" : "1px solid #CFD0D2",
              padding: "4px 8px 4px 8px",
            }}
            size="small"
            onClick={(event: any) => handleChange(event, 3)}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <DataIcon />{" "}
                <Typography
                  sx={{
                    fontSize: 14,
                    color: value === 3 ? "#3A6CAB" : "#5F6368",
                  }}
                >
                  Данные для расчетов
                </Typography>
              </Box>
            }
          /> */}
        </Stack>
        <TabPanel value={value} index={0}>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: "44px",
              marginBottom: "40px",
            }}
          >
            Пользователи
          </Typography>
          <Users users={rows} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: "44px",
              marginBottom: "40px",
            }}
          >
            История расчётов
          </Typography>
          <Calculations calculations={calculations} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: "44px",
              marginBottom: "40px",
            }}
          >
            Статистика (в разработке)
          </Typography>
          <div className={s.fakeStats}></div>
          {/* <Statistics statistics={statistics} /> */}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: "44px",
              marginBottom: "40px",
            }}
          >
            Данные для расчётов
          </Typography>
          <Counting counting={counting} />
        </TabPanel>
      </Box>
    </Box>
  );
};
