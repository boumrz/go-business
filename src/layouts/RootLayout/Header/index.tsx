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

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleIsCloseAuthModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          </div>
        </div>
      )}
    </>
  );
};
