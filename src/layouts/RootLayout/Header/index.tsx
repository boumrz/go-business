import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Modal, Typography } from "@mui/material";
import { ManageAccounts, Home, Close } from "@mui/icons-material";
import { useMainContext, useAuthContext } from "@/contexts";
// @ts-ignore
import { LogoIcon, UserIcon } from "@/assets/icons";
import { Authorization } from "@/components";
import { useGetUserQuery } from "@/services";
import s from "./styles.module.css";

export const Header = () => {
  const { isOpen, handleIsOpenAuthModal, handleIsCloseAuthModal } =
    useMainContext();
  const { token } = useAuthContext();

  const [noAuth, setNoAuth] = useState(true);

  const { data: user } = useGetUserQuery(null, {
    skip: !token,
  });

  useEffect(() => {
    if (token) {
      setNoAuth(false);
    }
  }, [token]);

  const handleLogin = (event: any) => {
    event.stopPropagation();
    handleIsOpenAuthModal();
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    handleIsCloseAuthModal();
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          minWidth: "392px",
          top: 0,
          position: "sticky",
          zIndex: 100,
        }}
      >
        <AppBar
          sx={{ backgroundColor: "white", boxShadow: "none" }}
          position="sticky"
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <LogoIcon />
            {noAuth ? (
              <button className={s.button} onClick={handleLogin}>
                Вход/Регистрация
              </button>
            ) : (
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#3A6CAB",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                  variant="body2"
                >
                  <UserIcon /> {user?.firstName ?? "Пользователь"}
                </Typography>
                <Link to="/calculator">
                  <Home sx={{ fill: "#3A6CAB" }} />
                </Link>
                <Link to="/admin">
                  <ManageAccounts sx={{ fill: "#3A6CAB" }} />
                </Link>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={s.auth}
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            width: { xs: "320px", sm: "448px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: "32px",
              top: "24px",
              zIndex: 100000,
            }}
          >
            <Close sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>
          <Authorization />
        </Box>
      </Modal>
    </>
  );
};
