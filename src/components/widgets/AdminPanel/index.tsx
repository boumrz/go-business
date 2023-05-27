import { SyntheticEvent, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Users, Calculations, Counting, Statistics } from "@/components";

const createDataUsers = (inn: string, email: string) => {
  return { inn, email };
};

const createDataCalculation = (date: string, user: string, amount: string) => {
  return { date, user, amount };
};

const createDataStatistics = (
  statistic1: string,
  statistic2: string,
  statistic3: string
) => {
  return { statistic1, statistic2, statistic3 };
};

const rows = [
  createDataUsers("770666666666", "ivanov@mail.ru"),
  createDataUsers("770666666666", "ivanov@mail.ru"),
  createDataUsers("770666666666", "ivanov@mail.ru"),
];

const createDataCounting = (data1: string, data2: string, data3: string) => {
  return { data1, data2, data3 };
};

const statistics = [
  createDataStatistics("Статистика 1", "Статистика 2", "Статистика 3"),
  createDataStatistics("Статистика 1", "Статистика 2", "Статистика 3"),
  createDataStatistics("Статистика 1", "Статистика 2", "Статистика 3"),
];

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
    <Box sx={{ paddingTop: "32px", paddingLeft: "64px", paddingRight: "64px" }}>
      <Box>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "16px" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Пользователи" />
            <Tab label="История расчетов" />
            <Tab label="Статистика" />
            <Tab label="Данные для расчетов" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Users users={rows} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Calculations calculations={calculations} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Statistics statistics={statistics} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Counting counting={counting} />
        </TabPanel>
      </Box>
    </Box>
  );
};
