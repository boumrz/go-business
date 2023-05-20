import { createContext, ReactNode, useMemo, useState, useContext } from "react";

interface MainContextValue {
  isOpen: boolean;
  handleIsOpenAuthModal: () => void;
  handleIsCloseAuthModal: () => void;
}

interface MainProviderProps {
  children: ReactNode;
}

export const MainContext = createContext({} as MainContextValue);

export const MainProvider = ({ children }: MainProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpenAuthModal = () => {
    setIsOpen(true);
  };

  const handleIsCloseAuthModal = () => {
    setIsOpen(false);
  };

  const mainContextValue = useMemo(
    () => ({ isOpen, handleIsOpenAuthModal, handleIsCloseAuthModal }),
    [isOpen]
  );

  return (
    <MainContext.Provider value={mainContextValue}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
