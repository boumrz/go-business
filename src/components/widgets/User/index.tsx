import { useParams, Link, Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import s from "./styles.module.css";

export const User = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/admin" />;
  }

  return (
    <Box
      sx={{
        paddingTop: "28px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "64px",
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
          sx={{
            paddingTop: "36px",
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "44px",
            paddingBottom: "40px",
          }}
        >
          Пользователь {id}
        </Typography>
        <Box>
          <Typography
            sx={{
              paddingBottom: "24px",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            Компания
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              ИНН
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              Компания
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              Регион
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              Сайт
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <Typography
            sx={{
              paddingBottom: "24px",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            Представитель
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              Иван Иванов
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              Должность
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              email
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              Активность
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              paddingBottom: "24px",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            Расчеты
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              №1
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
            >
              №2
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
