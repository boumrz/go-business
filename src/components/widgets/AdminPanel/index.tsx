import { SyntheticEvent, useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { Users, Calculations } from "@/components";

function createData(name: string, address: string, email: string) {
  return { name, address, email };
}

const rows = [
  createData("Frozen yoghurt", "test1", "boumrz@gmail.com"),
  createData("Frozen yoghurt", "test1", "boumrz@gmail.com"),
  createData("Frozen yoghurt", "test1", "boumrz@gmail.com"),
];

export const AdminPanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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
    <Box sx={{ marginTop: "-64px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}
      >
        <Typography variant="h4">Панель администратора</Typography>
      </Box>
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
          <Calculations calculations={rows} />
        </TabPanel>
      </Box>
    </Box>
  );
};
