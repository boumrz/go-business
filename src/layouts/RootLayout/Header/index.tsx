import { useEffect, useRef } from "react";
import { useMainContext } from "@/contexts";
import { Authorization } from "@/components";
import s from "./styles.module.css";

export const Header = () => {
  const modalRef = useRef<any>();
  const { isOpen, handleIsOpenAuthModal, handleIsCloseAuthModal } =
    useMainContext();

  const handleLogin = (event: any) => {
    event.stopPropagation();
    handleIsOpenAuthModal();
  };

  return (
    <>
      <div className={s.wrapper}>
        <button type="button" onClick={handleLogin}>
          Войти
        </button>
      </div>
      {isOpen && (
        <div className={s.modalOverlay}>
          <div className={s.modal} ref={modalRef}>
            <Authorization />
            <button onClick={handleIsCloseAuthModal} className={s.cross}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};
