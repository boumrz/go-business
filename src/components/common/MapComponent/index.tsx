import { useState, useRef } from "react";
import { Button, Chip, Box, Tooltip } from "@mui/material";
import { useMapsContext } from "@/contexts";
import { MoscowMap } from "@/components";
import s from "./styles.module.css";

export const MapComponent = () => {
  const { labels } = useMapsContext();
  const modalRef = useRef<any>();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (event: any) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <div className={s.wrapper}>
      <Button onClick={handleButtonClick} type="button">
        Открыть карту
      </Button>

      {isOpen && (
        <div className={s.modal}>
          <div className={s.modalContent} ref={modalRef}>
            <div className={s.modalWrapper}>
              <MoscowMap />
              <div className={s.meta}>
                {labels.slice(0, 15).map(({ item, color }) => (
                  <Chip
                    style={{
                      backgroundColor: color,
                      color: "black",
                    }}
                    label={item}
                  />
                ))}
                {labels.length > 15 && (
                  <span className={s.counter}>
                    <Chip
                      style={{
                        backgroundColor: "#C2C0C0",
                        color: "white",
                      }}
                      label={`+ ${labels.length - 15}`}
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
