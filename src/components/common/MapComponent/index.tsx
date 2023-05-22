import { useState, useRef } from "react";
import { Button, Chip, Box, Tooltip } from "@mui/material";
import { useMapsContext } from "@/contexts";
import s from "./styles.module.css";

export const MapComponent = () => {
  const { labels } = useMapsContext();
  const modalRef = useRef<any>();
  const svgRef = useRef<any>();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (event: any) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const drawSvg = (coordStr: any) => {
    const svg = svgRef.current;

    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon.setAttribute("points", coordStr);

    svg.appendChild(polygon);
  };

  const myHover = (element: any) => {
    element.preventDefault();
    var hoveredElement = element;
    var coordStr = hoveredElement.target.getAttribute("coords");
    var areaType = hoveredElement.target.getAttribute("shape");

    switch (areaType) {
      case "polygon":
      case "poly":
        drawSvg(coordStr);
        break;
    }
  };

  return (
    <div className={s.wrapper}>
      <Button onClick={handleButtonClick} type="button">
        Открыть карту
      </Button>
      <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {labels.length > 0 &&
          labels.map((item) => {
            return (
              <Tooltip title={item}>
                <Chip sx={{ width: 200, overflow: "hidden" }} label={item} />
              </Tooltip>
            );
          })}
      </Box>

      {isOpen && (
        <div className={s.modal}>
          <div className={s.modalContent} ref={modalRef}>
            <img className={s.img} src="./map.svg" useMap="#image-map" />
            <map name="image-map">
              <area
                target=""
                alt="роговское"
                title=""
                onClick={myHover}
                href=""
                coords="108,670,114,672,116,677,129,676,169,698,167,703,196,720,220,733,198,742,198,762,204,777,198,805,184,806,166,812,142,820,122,816,114,786,98,785,88,759,81,734,87,709,108,701,129,694,105,683"
                shape="poly"
              />
              <area
                target=""
                alt="клёновское"
                title=""
                onClick={myHover}
                href=""
                coords="254,626,267,614,266,628,283,625,293,628,300,625,318,614,315,631,330,636,328,648,321,654,335,658,347,664,336,669,326,665,325,675,332,680,339,687,338,697,329,724,289,741,283,746,271,749,266,729,255,714,251,686,238,678,248,663,253,651,262,645"
                shape="poly"
              />
            </map>
            <svg
              ref={svgRef}
              className={s.imageMapperSvg}
              style={{ width: "100%" }}
            ></svg>
          </div>
        </div>
      )}
    </div>
  );
};
