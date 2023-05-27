import { useState } from "react";
import cn from "clsx";
import { Chip, Modal, Box, Typography } from "@mui/material";
import { useMapsContext } from "@/contexts";
import { MoscowMap } from "@/components";
// @ts-ignore
import { MarkerMapIcon } from "@/assets/icons";
import s from "./styles.module.css";

export const MapComponent = () => {
  const { districtsByAreas } = useMapsContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event: any) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <Box sx={{ width: "100%", display: { xs: "none", md: "inherit" } }}>
        <button className={s.button} onClick={handleOpen} type="button">
          <MarkerMapIcon /> Открыть карту
        </button>
      </Box>
      <div className={cn(s.meta, s.empty)}> 
        {Object.entries(districtsByAreas).map(([key, values]) => (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {(values as Array<any>).length > 0 && (
              <>
                <Typography variant="body2">{key}</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(values as Array<any>).map(({ item, color }) => (
                    <Chip
                      style={{
                        backgroundColor: color,
                        color: "black",
                        opacity: 0.8,
                      }}
                      label={item}
                    />
                  ))}
                </Box>
              </>
            )}
          </Box>
        ))}
      </div>

      <Modal
        open={isOpen}
        keepMounted
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={s.modal}
          sx={{ bgcolor: "background.paper", boxShadow: 24 }}
        >
          <MoscowMap />
          <div className={s.meta}>
            {Object.entries(districtsByAreas)
              .slice(0, 4)
              .map(([key, values]) => (
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  {(values as Array<any>).length > 0 && (
                    <>
                      <Typography variant="body2">{key}</Typography>
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                      >
                        {(values as Array<any>).map(({ item, color }) => (
                          <Chip
                            style={{
                              backgroundColor: color,
                              color: "black",
                              opacity: 0.8,
                            }}
                            label={item}
                          />
                        ))}
                      </Box>
                    </>
                  )}
                </Box>
              ))}
            {Object.entries(districtsByAreas).length > 4 && (
              <span className={s.counter}>
                <Chip
                  style={{
                    backgroundColor: "#C2C0C0",
                    color: "white",
                  }}
                  label={`+ ${
                    Object.entries(districtsByAreas).length - 4
                  } округов`}
                />
              </span>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
