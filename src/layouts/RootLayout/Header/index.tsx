import { useEffect, useState } from "react";
import { Box, AppBar, Toolbar, Modal, Typography } from "@mui/material";
import { useMainContext, useAuthContext } from "@/contexts";
import { LogoIcon } from "@/assets/icons";
import { Authorization } from "@/components";
import s from "./styles.module.css";

export const Header = () => {
  const { isOpen, handleIsOpenAuthModal, handleIsCloseAuthModal } =
    useMainContext();
  const { token } = useAuthContext();

  const [noAuth, setNoAuth] = useState(true);

  useEffect(() => {
    if (token) {
      setNoAuth(false);
    }
  }, [token]);

  console.log("noAuth", noAuth);
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
          marginBottom: "96px",
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
              <button
                className={s.button}
                onClick={handleLogin}
                color="primary"
              >
                Вход
              </button>
            ) : (
              <Typography sx={{ color: "#6750a4" }} variant="body2">
                Пользователь
              </Typography>
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
          sx={{ bgcolor: "background.paper", boxShadow: 24 }}
        >
          <Authorization />
        </Box>
      </Modal>
    </>
  );
};
