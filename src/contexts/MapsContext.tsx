import { createContext, ReactNode, useMemo, useState, useContext } from "react";

interface MapsContextValue {
  labels: Array<any>;
  districtsByAreas: any;
  handleChangeLabels: (labelsMap: any) => void;
  handleChangeDistrictsByAreas: (districtsByAreas: Array<any>) => void;
}

interface MapsProviderProps {
  children: ReactNode;
}

export const MapsContext = createContext({} as MapsContextValue);

export const MapsProvider = ({ children }: MapsProviderProps) => {
  const [labels, setLabels] = useState<Array<any>>([]);
  const [districtsByAreas, setDistrictsByAreas] = useState<any>({});

  const handleChangeLabels = (labelsMap: any) => {
    setLabels(labelsMap);
  };

  const handleChangeDistrictsByAreas = (districtsByAreas: Array<any>) => {
    setDistrictsByAreas(districtsByAreas);
  };

  const mapsContextValue = useMemo(
    () => ({
      labels,
      districtsByAreas,
      handleChangeLabels,
      handleChangeDistrictsByAreas,
    }),
    [labels, districtsByAreas]
  );

  return (
    <MapsContext.Provider value={mapsContextValue}>
      {children}
    </MapsContext.Provider>
  );
};

export const useMapsContext = () => useContext(MapsContext);
