import { useCallback, useEffect, useState } from "react";
import { YMaps, Map, ZoomControl } from "@pbe/react-yandex-maps";
import { useMapsContext } from "@/contexts";

export const YandexMap = ({ onMapClick }: any) => {
  const [ymaps, setYmaps] = useState<any>(null);
  const { labels, handleChangeLabels } = useMapsContext();

  const handleClick = useCallback(
    async (event: any) => {
      const clickedCoordinates = event.get("coords");

      // Используем ymaps.geocode для получения информации о районе
      const geocoder = ymaps.geocode(clickedCoordinates, {
        kind: "district",
        apikey: "ba6f6585-aae5-466f-a02f-7a27c891ac45",
      });
      const response = await geocoder;
      const firstGeoObject = response.geoObjects.get(0);
      const district = firstGeoObject.getAddressLine().split("Москва,");

      if (!labels.includes(district)) {
        handleChangeLabels([...labels, district]);
      }
      onMapClick(clickedCoordinates, district);
    },
    [onMapClick, ymaps]
  );

  return (
    <YMaps query={{ apikey: "ba6f6585-aae5-466f-a02f-7a27c891ac45" }}>
      <Map
        onLoad={(ymaps) => {
          setYmaps(ymaps);
        }}
        defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}
        width="100%"
        height="400px"
        onClick={handleClick}
        modules={[
          "control.ZoomControl",
          "control.FullscreenControl",
          "control.GeolocationControl",
          "geocode",
        ]}
      >
        <ZoomControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
};
