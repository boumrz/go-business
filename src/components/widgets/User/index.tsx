import { useParams, Link, Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import s from "./styles.module.css";

export const User = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/admin" />;
  }

  console.log("id", id);

  return (
    <Box
      sx={{
        paddingTop: "28px",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "64px",
        paddingRight: "64px",
      }}
    >
      <Link className={s.back} to={"/admin"}>
        <ArrowBack /> Пользователи
      </Link>
      <Box>
        <Typography
          variant="h4"
          sx={{ paddingTop: "36px", fontSize: "18px", fontWeight: "600" }}
        >
          Пользователь {id}
        </Typography>
        <Box>
          <Typography sx={{ paddingBottom: "24px" }}>Компания</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography>ИНН</Typography>
            <Typography>Компания</Typography>
            <Typography>Регион</Typography>
            <Typography>Сайт</Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ paddingBottom: "24px" }}>Представитель</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography>Иван Иванов</Typography>
            <Typography>Должность</Typography>
            <Typography>email</Typography>
            <Typography>Активность</Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ paddingBottom: "24px" }}>Расчеты</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography>№1</Typography>
            <Typography>№2</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
