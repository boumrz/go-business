import { createContext, ReactNode, useMemo, useState, useContext } from "react";

interface MapsContextValue {
  labels: Array<any>;
  handleChangeLabels: (labelsMap: Array<any>) => void;
}

interface MapsProviderProps {
  children: ReactNode;
}

export const MapsContext = createContext({} as MapsContextValue);

export const MapsProvider = ({ children }: MapsProviderProps) => {
  const [labels, setLabels] = useState<Array<any>>([]);

  const handleChangeLabels = (labelsMap: Array<any>) => {
    setLabels(labelsMap);
  };

  const mapsContextValue = useMemo(
    () => ({ labels, handleChangeLabels }),
    [labels]
  );

  return (
    <MapsContext.Provider value={mapsContextValue}>
      {children}
    </MapsContext.Provider>
  );
};

export const useMapsContext = () => useContext(MapsContext);
