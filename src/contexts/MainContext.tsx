import { createContext, ReactNode, useMemo, useState, useContext } from "react";
import { CalculationResponse } from "../services/CalculationService/Calculation.dto";

interface MainContextValue {
  isOpen: boolean;
  handleIsOpenAuthModal: () => void;
  handleIsCloseAuthModal: () => void;
  handleSetCalculationResults: (results: CalculationResponse) => void;
  calculationResults?: CalculationResponse;
}

interface MainProviderProps {
  children: ReactNode;
}

export const MainContext = createContext({} as MainContextValue);

export const MainProvider = ({ children }: MainProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [calculationResults, setCalculationResults] = useState<
    CalculationResponse | undefined
  >();

  const handleSetCalculationResults = (results: CalculationResponse) => {
    setCalculationResults(results);
  };

  const handleIsOpenAuthModal = () => {
    setIsOpen(true);
  };

  const handleIsCloseAuthModal = () => {
    setIsOpen(false);
  };

  const mainContextValue = useMemo(
    () => ({
      isOpen,
      calculationResults,
      handleSetCalculationResults,
      handleIsOpenAuthModal,
      handleIsCloseAuthModal,
    }),
    [isOpen, calculationResults]
  );

  return (
    <MainContext.Provider value={mainContextValue}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
