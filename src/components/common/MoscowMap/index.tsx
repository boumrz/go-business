import { useRef, useMemo, useState } from "react";
import { useMapsContext } from "@/contexts";
import s from "./styles.module.css";

export const MoscowMap = () => {
  const { labels, handleChangeLabels } = useMapsContext();
  const [regions, setRegions] = useState<Array<any>>([]);
  const svgRef = useRef<any>();

  const drawSvg = (
    coordStr: any = "",
    toolTip: any = "",
    color: any = "black",
    isDelete: any = false
  ) => {
    const svg = svgRef.current;

    if (isDelete) {
      const polygons = svg.querySelectorAll("polygon");
      polygons.forEach((item: any) => {
        const poly = item.getAttribute("points");
        if (poly === coordStr) {
          svg.removeChild(item);
          setRegions(regions.filter((item) => item !== toolTip));
          handleChangeLabels(labels.filter(({ item }) => item !== toolTip));
        }
      });
      return;
    }

    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon.setAttribute("points", coordStr);
    polygon.style.fill = color;

    svg.appendChild(polygon);
    setRegions([...regions, toolTip]);
  };

  const myHover = (element: any) => {
    element.preventDefault();
    const toolTip = element.target.getAttribute("href");
    const color = element.target.getAttribute("alt");
    var hoveredElement = element;
    var coordStr = hoveredElement.target.getAttribute("coords");
    var areaType = hoveredElement.target.getAttribute("shape");

    console.log("regions", regions);
    if (regions.includes(toolTip)) {
      drawSvg(coordStr, toolTip, color, true);
      return;
    }
    if (!labels.includes(toolTip)) {
      handleChangeLabels([
        ...labels,
        {
          item: toolTip,
          color,
        },
      ]);
    }

    switch (areaType) {
      case "polygon":
      case "poly":
        drawSvg(coordStr, toolTip, color);
        break;
    }
  };

  const showTooltip = () => {
    let flag = false;

    const tooltipEl = document.createElement("div");

    return (event: any, isOpen: boolean) => {
      if (!flag && isOpen) {
        event.preventDefault();
        const toolTip = event.target.getAttribute("href");
        const color = event.target.getAttribute("alt");
        tooltipEl.innerText = toolTip;
        tooltipEl.style.position = "fixed";
        tooltipEl.style.zIndex = "1000";
        tooltipEl.style.borderRadius = "8px";
        tooltipEl.style.top = `${event.clientY + 10}px`;
        tooltipEl.style.left = `${event.clientX + 10}px`;
        tooltipEl.style.backgroundColor = color;
        tooltipEl.style.color = "black";
        tooltipEl.style.paddingTop = "8px";
        tooltipEl.style.paddingBottom = "8px";
        tooltipEl.style.paddingLeft = "16px";
        tooltipEl.style.paddingRight = "16px";
        tooltipEl.style.fontFamily = "Arial";
        tooltipEl.style.fontSize = "14px";
        document.body.appendChild(tooltipEl);
        flag = true;
      }

      if (flag && !isOpen) {
        document.body.removeChild(tooltipEl);
        flag = false;
      }
    };
  };
  const renderTooltip = useMemo(() => showTooltip(), []);

  return (
    <>
      <img className={s.img} src="./map.svg" useMap="#image-map" />
      <map name="image-map">
        {/* Начало Зеленограда */}
        <area
          target=""
          alt="#FF99FA"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="матушкино"
          coords="221,16,220,21,214,22,212,25,220,30,223,30,224,33,227,45,232,45,232,31,238,34,243,31,232,22,229,16"
          shape="poly"
        />
        <area
          target=""
          alt="#FF99FA"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="савёлки"
          coords="258,65,261,51,258,44,252,45,258,39,249,33,243,31,238,34,234,33,232,45,237,51,243,53,247,53,252,62"
          shape="poly"
        />
        <area
          target=""
          alt="#FF99FA"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="старое крюково"
          coords="221,31,209,50,229,61,237,51,230,45,226,45,224,33"
          shape="poly"
        />
        <area
          target=""
          alt="#FF99FA"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="крюково"
          onClick={myHover}
          coords="229,62,227,70,235,76,235,82,227,82,224,77,197,70,197,54,195,42,197,33,209,50"
          shape="poly"
        />
        <area
          target=""
          alt="#FF99FA"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="силино"
          coords="187,19,209,50,220,31,212,25,214,21,220,21,221,16,217,14,206,22,201,18"
          shape="poly"
        />
        {/* Конец Зеленограда */}

        {/* Начало Троицкий АО*/}
        <area
          target=""
          alt="#E3FF6D"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="роговское"
          coords="106,671,115,674,117,680,128,675,170,698,175,705,184,708,196,722,204,728,222,733,214,740,199,746,199,774,204,775,200,784,200,804,185,812,167,813,167,821,141,824,128,825,120,818,114,812,118,804,118,787,99,791,87,760,82,753,77,733,84,722,88,710,92,708,106,708,102,702,128,695,120,689,111,688,105,683"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="вороновское"
          coords="117,680,126,675,169,695,176,705,185,708,193,719,204,727,222,733,222,730,229,724,231,725,235,733,241,737,255,734,258,725,255,715,251,712,249,695,249,684,237,687,238,675,246,671,246,658,251,651,260,648,258,637,257,626,248,623,237,623,237,613,245,610,234,604,232,601,220,607,214,617,204,616,191,617,179,614,167,622,166,614,156,610,152,607,153,593,149,592,143,587,135,585,129,584,121,590,125,593,115,607,109,610,106,607,103,620,100,629,108,633,120,640,109,648,106,671,115,674"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="киевский"
          coords="14,535,47,535,44,539,49,541,56,535,62,539,56,545,64,547,58,573,65,586,67,597,74,597,74,603,84,606,88,600,94,602,94,614,91,621,103,621,100,630,120,640,109,650,106,668,96,658,93,661,85,653,84,646,71,630,64,627,40,603,43,599,37,591,45,585,30,574,33,570,26,565,21,552,9,563,65,650,73,655,70,664,62,668,59,663,64,658,65,649,65,649,9,563,14,549,9,563"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="клёновский"
          coords="255,625,267,617,267,626,270,633,275,625,284,623,282,631,293,629,299,625,301,629,314,616,317,617,313,629,323,629,323,637,331,637,328,648,328,652,323,654,334,655,339,661,348,666,343,669,337,671,325,664,322,669,327,674,331,678,332,683,337,683,340,686,331,727,305,737,292,740,292,746,281,746,281,754,269,751,272,742,267,736,266,727,257,721,255,715,251,712,249,696,249,684,237,686,238,675,246,671,246,658,251,652,260,649,258,633"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="щаповское"
          coords="311,535,313,544,305,549,314,552,301,554,301,561,298,563,292,569,287,587,278,587,279,614,278,613,270,619,266,616,267,616,270,634,275,623,284,623,282,629,293,631,293,630,299,626,301,630,314,616,317,618,313,630,323,628,323,636,331,636,327,646,324,655,333,655,347,666,347,663,346,656,335,646,345,640,346,634,358,630,347,620,354,613,360,607,364,608,363,616,366,618,372,613,369,598,372,596,375,589,369,584,372,579,369,573,355,572,353,565,353,561,347,556,326,556,332,550,333,546,321,544,327,538"
          shape="poly"
        />
        <area
          target=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          alt="#E3FF6D"
          onClick={myHover}
          title=""
          href="краснопахорское"
          coords="194,551,202,546,197,544,197,540,218,540,217,535,220,532,229,538,234,535,223,527,230,526,234,523,254,523,257,519,260,531,257,534,261,537,261,543,269,540,281,538,278,528,289,515,307,517,304,523,298,523,295,525,304,528,298,532,298,537,304,538,308,531,311,535,313,544,304,549,313,552,301,555,301,560,292,569,287,587,278,587,279,613,270,619,267,617,255,625,248,623,237,623,237,614,245,611,234,605,232,601,238,590,240,581,235,575,234,570,229,570,228,578,223,579,219,566,208,563"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="троицк"
          coords="267,491,275,498,278,494,272,489,280,484,289,484,290,484,289,487,289,492,293,495,292,504,287,514,287,517,287,517,278,529,281,537,261,543,261,537,257,535,260,530,257,517,263,514,266,506,263,503"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="первомайское"
          coords="184,444,212,432,212,440,220,443,229,437,230,438,232,441,230,451,252,446,260,449,267,454,274,458,272,451,286,452,286,457,297,455,303,449,307,449,303,458,300,460,304,469,293,474,290,484,280,484,272,489,278,494,275,498,267,491,263,504,266,506,263,514,257,518,254,523,234,523,223,527,234,534,229,537,220,532,217,535,218,540,197,541,197,544,201,547,194,549,164,526,166,521,175,523,191,521,191,510,184,507,184,497,189,497,192,483,183,484,181,467,184,464,184,460,180,458,180,451,184,448"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="михайлово-ярцевское"
          coords="167,623,178,615,191,618,204,616,214,618,220,607,232,600,238,589,240,580,235,575,234,572,229,570,227,577,223,580,220,567,206,563,197,555,189,550,183,550,180,553,177,553,175,547,169,555,166,555,161,563,155,561,154,574,151,584,144,586,148,590,154,593,152,607,166,615"
          shape="poly"
        />
        <area
          target=""
          alt="#E3FF6D"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="новофедоровское"
          coords="177,543,171,555,166,555,161,563,157,560,154,566,154,575,151,583,144,586,129,583,121,590,124,593,115,607,109,610,106,606,103,620,91,620,94,615,94,603,88,600,83,606,74,603,74,598,68,598,65,587,58,573,65,547,54,546,61,540,55,534,49,540,45,540,48,534,45,534,14,534,15,523,22,521,23,484,77,487,77,477,88,483,86,497,108,501,104,535,114,532,118,538,120,543,129,547,129,535,135,535,137,529,151,530,151,538,158,540,166,549"
          shape="poly"
        />
        {/* Конец Троицкий АО*/}

        {/* Начало Новомосковский АО */}
        <area
          target=""
          alt="#6EEBB6"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="десеновское"
          coords="307,448,306,451,303,458,300,461,304,469,293,474,290,486,289,491,293,494,292,503,287,514,307,517,304,523,293,526,304,529,298,532,298,537,303,537,307,534,327,537,330,526,338,530,341,526,349,523,350,517,357,514,352,509,363,495,358,489,341,487,340,478,329,469,332,454,321,449"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="кокошкино"
          coords="234,383,214,401,220,403,215,408,218,414,200,414,197,409,192,403,192,394,197,391,201,391,203,397,214,394,217,391,220,389,218,385,223,381"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="марушкинское"
          coords="261,448,267,441,277,443,281,434,277,435,266,435,261,440,255,440,252,429,261,423,260,418,250,423,243,420,243,411,249,401,249,392,237,383,235,392,235,401,224,397,230,408,220,401,215,409,218,414,200,414,192,403,187,403,183,397,174,401,174,408,169,405,167,411,175,426,183,435,184,444,212,431,214,441,221,443,229,438,234,440,230,451,250,446"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="внуковское "
          coords="280,388,287,380,292,381,293,383,306,378,304,374,293,369,303,351,303,345,289,343,287,346,292,348,290,354,286,354,286,358,278,358,267,357,258,358,250,362,246,368,246,372,240,381,249,391,257,388,258,392,266,386,269,392"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="мосрентген"
          coords="361,369,380,394,376,403,369,400,367,388,357,382,357,372"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="московский"
          coords="350,352,361,367,355,372,357,383,360,384,352,393,340,393,340,396,333,406,333,412,323,423,309,415,306,416,297,410,295,415,289,412,283,407,280,400,287,395,280,389,287,380,293,383,306,378,304,376,317,383,324,378,337,380,341,369,341,360,340,353"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="филимоновское"
          coords="252,429,261,423,260,419,283,407,295,415,297,410,306,416,309,415,321,423,315,430,321,433,335,447,332,455,321,449,303,449,297,455,286,458,286,452,272,452,272,456,264,453,261,447,267,441,277,441,281,435,266,435,260,439,254,438"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="сосенское"
          coords="380,395,389,409,400,413,409,417,415,426,407,427,404,429,407,433,416,442,413,449,403,445,395,453,392,456,383,461,373,464,370,461,367,458,358,455,347,453,343,458,340,452,333,455,335,445,321,433,315,430,323,422,333,412,333,404,340,396,340,393,352,393,360,384,366,389,369,399,376,402"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="воскресенское"
          coords="332,454,340,451,343,459,347,453,360,454,367,457,373,463,373,473,384,471,395,474,400,479,390,480,376,479,367,485,363,494,358,488,341,486,340,476,329,468"
          shape="poly"
        />
        <area
          target=""
          alt="#6EEBB6"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="рязанское "
          coords="352,508,363,494,366,485,375,479,390,480,398,485,400,494,403,496,407,499,406,506,410,511,416,508,421,508,423,508,423,511,421,517,413,522,416,534,407,537,410,549,407,554,393,552,384,548,378,545,384,539,383,534,364,528,363,520,358,514,357,514"
          shape="poly"
        />
        <area
          target=""
          onClick={myHover}
          alt="#6EEBB6"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="щербинка"
          coords="398,489,392,481,390,481,401,479,410,486,406,493,415,493,423,484,427,482,426,501,432,504,432,511,430,514,423,508,415,508,410,512,406,501,404,496,400,496"
          shape="poly"
        />
        {/* Начало Новомосковский АО */}

        {/* Начало Западный АО */}
        <area
          target=""
          alt="#FFB287"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Можайский"
          coords="318,286,326,285,338,288,357,288,361,305,347,311,344,305,340,309,333,314,330,315,318,322,309,322,307,326,310,328,307,334,292,328,298,320,301,315,307,311,307,309,310,314,315,311,310,305,318,305,323,314,326,306"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="Кунцево"
          coords="313,245,344,272,347,271,353,277,357,282,357,288,338,288,326,285,318,285,315,271,313,254,191,277,183,289,166,291,160,282,160,283,154,297,144,299,128,303,121,297,132,289,129,282,124,288,117,289,106,282,104,277,97,280,89,274,92,257,86,271,81,282,65,280,71,266,89,257,101,252,106,256,97,259,103,263,109,251,117,262,126,262,134,266,137,276,143,277,149,283,155,286,161,277,169,263,181,266,186,271,191,276,315,254,317,231,327,211,320,208,318,217,324,215,317,229,306,225,312,218,306,215,298,220,290,220,280,217,274,220,275,223,283,221,284,228,286,234,295,238,284,244,286,249,295,251,304,249,310,237,317,231"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Крылатское"
          coords="315,246,326,248,335,246,340,243,350,244,358,242,363,243,367,252,364,260,350,268,344,272,327,257"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Филёвский парк"
          coords="352,268,347,271,357,282,375,274,380,282,390,279,398,269,395,259,383,251,375,251,373,254,373,266,367,274,360,276"
          shape="poly"
        />
        <area
          target=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          alt="#FFB287"
          onClick={myHover}
          title=""
          href="Дорогомилово"
          coords="398,269,404,272,416,265,424,262,426,270,421,279,412,285,406,279,386,291,380,283,390,280"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Фили-Давыдково"
          coords="386,291,378,282,375,272,357,282,357,289,361,305,369,302,373,294,383,297,386,291"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Очаково- Матвеевское"
          coords="350,350,341,332,338,321,333,314,344,306,347,311,369,303,373,294,383,297,380,306,370,312,369,320,373,326,364,337"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Трапарёво- Никулино"
          coords="363,370,390,348,384,341,378,342,378,336,372,333,373,330,372,327,350,350"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Проспект Вернадского"
          coords="373,325,380,331,381,322,390,325,393,331,400,337,390,348,384,341,378,342,376,337,370,328"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Раменки"
          coords="406,279,412,285,407,293,412,301,420,302,410,313,403,322,392,331,389,325,381,324,380,331,373,325,369,321,370,311,380,305,383,296,386,290"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="Новопеределкино"
          coords="301,345,307,348,301,345,306,346,315,345,315,351,318,360,324,377,317,383,310,378,304,374,295,368,303,355"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="Солнцево"
          coords="340,331,350,351,340,351,338,354,341,357,341,369,337,379,326,380,315,351,320,351,320,346,326,346,327,351,341,348,335,340,335,336"
          shape="poly"
        />
        <area
          target=""
          alt="#FFB287"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Внуково"
          coords="243,417,250,423,286,406,280,400,287,395,277,389,269,391,266,385,257,394,255,388,249,392,237,380,214,401,230,409,224,397,235,401,237,381,250,392,249,401,244,408"
          shape="poly"
        />
        {/* Конец Западный АО */}

        {/* Начало Центральный АО */}
        <area
          target=""
          alt="#FF9AB8"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Пресненский"
          coords="395,258,398,256,403,255,409,247,421,244,427,242,438,250,444,258,444,261,430,259,426,264,423,262,413,267,404,272,398,270"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Хамовники"
          coords="426,271,435,271,446,267,447,271,443,278,435,290,427,299,423,302,418,302,412,301,407,293,412,285,421,279"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Арбат"
          coords="426,264,430,260,444,260,446,263,446,268,435,271,426,269,426,264"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          onClick={myHover}
          title=""
          href="Якиманка"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          coords="447,268,455,268,453,275,452,283,449,295,439,294,430,304,427,300,435,292"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Тверской"
          coords="433,228,439,228,441,234,446,237,449,238,452,251,450,255,458,261,455,268,447,268,444,266,446,263,441,255,438,251,427,243,432,240"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="Мещанский"
          coords="446,236,449,233,449,226,458,228,458,223,464,225,466,229,462,238,458,246,455,257,450,255,450,243,449,238"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="Красносельский"
          coords="466,229,464,235,458,246,455,258,463,249,473,249,476,244,481,240,483,240,487,237"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Басманный"
          coords="486,237,498,238,501,244,492,251,489,249,484,258,478,258,478,266,470,263,464,264,458,261,455,258,463,249,473,249,478,243"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Таганский"
          coords="458,259,464,264,470,262,484,268,493,276,490,285,484,284,478,289,475,282,473,289,467,287,464,275,456,267,458,259"
          shape="poly"
        />
        <area
          target=""
          alt="#FF9AB8"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Замоскворечье"
          coords="449,293,452,293,459,292,463,293,467,285,464,275,456,267,453,276"
          shape="poly"
        />
        {/* Конец Центральный АО */}

        {/* Начало Юго-Западный АО */}
        <area
          target=""
          alt="#C1BAFF"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Гагаринский"
          coords="427,301,423,302,418,302,403,322,412,330,415,327,432,307,430,304"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Академический"
          coords="432,307,415,327,418,330,427,338,432,333,439,321"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Катловка"
          coords="439,319,443,322,443,327,447,328,447,332,443,338,446,345,430,344,432,339,429,336,433,333"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Зюзино"
          coords="430,344,447,347,443,353,443,367,433,367,429,362,421,359"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Черёмушки"
          coords="410,336,416,330,427,338,429,336,430,339,429,344,421,359,413,358,407,353,416,341"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Коньково"
          coords="400,351,407,353,421,359,420,364,413,364,415,368,410,376,406,378,401,381,395,378,398,373,387,365,393,358,396,358"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Обручевский"
          coords="400,336,406,342,409,341,410,336,415,341,407,353,400,351,396,358,393,358,387,365,381,361,378,359,390,348"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Тёплый стан"
          coords="363,371,376,359,386,365,396,373,395,378,389,390,381,396,364,371"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Ясенево"
          coords="421,361,430,364,430,371,432,376,429,385,427,398,429,402,427,422,412,418,404,414,403,414,390,408,381,398,389,390,395,378,401,381,406,378,410,376,415,368,413,362"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Ломоносовский"
          coords="392,332,401,322,412,329,415,327,418,332,409,336,409,341,404,341,398,335"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          onClick={myHover}
          href="Северное Бутово"
          coords="410,417,424,422,435,427,439,435,446,439,438,442,435,445,435,449,430,452,420,447,416,442,404,429,413,424,410,417"
          shape="poly"
        />
        <area
          target=""
          alt="#C1BAFF"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Южное Бутово"
          coords="373,464,374,473,377,473,384,470,387,473,390,473,396,475,399,478,410,485,405,493,404,495,415,493,415,493,423,484,427,482,426,501,439,508,447,508,444,490,430,479,433,465,435,450,427,452,420,447,416,442,413,449,404,445,392,456"
          shape="poly"
        />
        {/* Конец Юго-Западный АО */}

        {/* Начало Южный АО */}
        <area
          target=""
          onClick={myHover}
          alt="#8DC6FF"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Донской"
          coords="430,304,438,295,447,293,447,298,443,301,446,309,452,307,455,309,455,321,447,322,443,321,435,312"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="Даниловский"
          coords="449,294,459,292,463,293,467,287,473,289,476,309,475,325,461,327,456,325,455,319,455,309,452,307,446,308,443,301,446,299"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Нагорный"
          coords="443,321,447,322,452,322,455,338,452,350,453,367,449,368,443,367,443,353,447,347,443,338,449,331,443,325"
          shape="poly"
        />
        <area
          target=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          alt="#8DC6FF"
          title=""
          href="Нагатино"
          coords="456,325,467,327,475,325,473,342,470,348,470,357,463,351,459,356,455,351,452,351,455,337,452,322,455,322,459,327"
          shape="poly"
        />
        <area
          target=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          alt="#8DC6FF"
          title=""
          onClick={myHover}
          href="Нагатинский затон"
          coords="476,311,486,316,496,319,501,325,499,331,490,336,481,342,478,354,473,359,470,356,470,348,473,342"
          shape="poly"
        />
        <area
          target=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          alt="#8DC6FF"
          title=""
          href="Москворечье"
          coords="453,367,452,351,458,351,459,356,463,351,470,356,473,359,478,354,490,365,501,368,510,368,510,376,490,379,490,371,463,368"
          shape="poly"
        />
        <area
          target=""
          onClick={myHover}
          alt="#8DC6FF"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Царицино"
          coords="453,367,489,371,478,388,463,394,458,390"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          onClick={myHover}
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Сев.Чертаново"
          coords="429,365,435,367,443,367,450,368,453,367,456,385,447,385,436,382,430,382,432,376,427,373"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Цент.Чертаново"
          coords="430,382,436,382,446,385,455,385,458,391,463,396,459,400,444,396,443,402,433,399,429,402,426,396,427,387"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="Южное Чертаново"
          coords="427,422,430,402,435,399,443,402,444,396,459,399,455,407,449,413,447,430,441,431,439,436,435,427"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          href="З.Бирюлёво"
          coords="459,431,475,433,466,402,463,394,459,399,455,407,449,413,447,430"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          onClick={myHover}
          title=""
          href="В.Бирюлево"
          coords="479,385,483,387,483,394,490,401,496,407,504,408,509,416,493,427,481,433,475,433,469,413,463,394,473,391"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="С.Орехово-борисово  "
          coords="479,385,489,371,490,379,510,376,510,384,510,391,501,394,490,401,483,394,483,387,483,394"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Ю.Орехово-борисово  "
          coords="510,391,512,394,524,393,535,388,541,390,536,393,524,405,513,413,510,418,504,408,496,407,492,401"
          shape="poly"
        />
        <area
          target=""
          onClick={myHover}
          alt="#8DC6FF"
          title=""
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Зябликово"
          coords="510,376,521,376,535,387,526,391,512,394,510,391"
          shape="poly"
        />
        <area
          target=""
          alt="#8DC6FF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Братьево"
          coords="510,368,519,367,538,359,541,362,539,371,541,380,544,385,539,390,521,376,510,376"
          shape="poly"
        />
        {/* Конец Южный АО */}

        {/* Начало Северо-Западный АО */}
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Куркино"
          coords="325,116,326,126,332,127,335,136,335,139,337,141,336,146,344,148,345,151,336,157,329,152,323,148,317,143,317,135,319,133,314,132,312,126,315,120,321,114"
          shape="poly"
        />
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Северное Тушино"
          coords="344,151,351,147,361,155,365,171,344,174,336,173,327,171,330,164,335,157"
          shape="poly"
        />
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Митино"
          coords="329,170,327,178,330,186,329,193,320,192,313,195,312,199,305,202,302,195,301,188,300,183,306,180,295,177,299,173,300,166,311,158,321,157,321,165,318,170"
          shape="poly"
        />
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Строгино"
          coords="329,193,336,196,339,202,342,209,350,211,356,213,356,221,356,228,349,233,344,232,342,228,337,229,333,238,337,242,336,248,331,247,323,246,315,245,315,235,320,224,325,216,318,218,319,208,325,213"
          shape="poly"
        />
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Южное Тушино"
          coords="329,172,344,174,365,171,370,183,364,188,350,186,346,188,343,185,338,188,337,191,330,189,330,184,327,178"
          shape="poly"
        />
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Покровское Стрешнево"
          coords="370,183,375,192,374,193,371,193,374,195,380,195,382,197,379,203,379,205,373,205,369,208,363,210,358,207,356,213,350,211,342,209,339,201,336,196,330,193,330,190,337,192,338,189,343,184,346,188,351,186,364,188"
          shape="poly"
        />
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Щукино"
          coords="356,214,358,207,364,210,370,208,374,205,377,205,381,215,387,228,385,230,381,232,373,230,363,229,360,226,356,227"
          shape="poly"
        />
        <area
          target=""
          alt="#ABFFCD"
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          title=""
          href="Хорошёво-Мневники"
          coords="337,243,343,243,348,245,355,242,361,242,364,248,367,253,363,259,361,263,355,264,351,267,352,271,357,274,361,276,368,273,371,268,373,260,373,254,374,251,379,249,385,251,393,258,398,255,394,251,390,245,389,238,387,228,381,232,373,230,364,229,360,226,356,227,349,233,343,232,342,229,337,229,333,239"
          shape="poly"
        />
        {/* Конец Северо-Западный АО */}

        {/* Начало Северный АО */}
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Молжановсий"
          coords="296,77,302,73,306,79,310,76,319,76,323,80,325,77,327,83,339,76,345,80,343,85,337,86,336,91,336,99,332,99,329,107,331,113,326,116,321,114,315,118,312,113,320,108,308,99,305,105,301,105,296,95,302,90,307,92"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Левобережный"
          coords="351,146,354,145,356,143,365,143,379,166,380,165,383,172,379,173,373,173,368,176,361,160,361,155"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Ховрино"
          coords="365,143,373,140,393,157,388,161,392,166,383,171,379,164"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Головинский"
          coords="368,176,373,172,377,173,383,172,392,166,388,161,393,157,407,168,415,176,399,182,395,182,393,186,388,186,381,183,376,182,370,183"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Войковский"
          coords="389,186,390,192,394,197,398,203,395,206,390,206,379,205,382,196,381,195,375,195,373,193,375,192,370,183,375,182"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Сокол"
          coords="377,205,396,207,392,214,398,217,395,226,387,229,382,216"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Хорошевский"
          coords="398,217,405,221,408,224,406,227,414,234,410,239,414,244,410,246,406,249,402,255,399,256,393,249,390,242,388,229,395,227"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Дегугино"
          coords="374,141,385,135,388,140,392,139,399,149,407,156,414,164,421,174,415,175"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Дмитровский"
          coords="388,139,392,139,400,150,402,152,410,147,408,139,413,139,413,129,407,124,405,121,400,123,385,135"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Беговой"
          coords="408,224,420,234,425,227,433,227,431,240,426,243,414,244,411,240,414,234,406,228"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Аэропорт"
          coords="396,205,404,205,412,212,417,222,425,228,420,233,412,227,405,221,398,216,392,214,396,208"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Коптево"
          coords="415,175,419,179,406,187,407,190,402,192,404,199,406,206,404,204,398,204,395,196,390,192,389,186,392,186,395,183,401,181"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Тимирязевский"
          coords="423,174,426,175,429,184,426,193,429,205,433,212,424,214,414,214,411,211,406,206,402,192,407,191,406,187,418,180,414,175"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Савёловский"
          coords="433,227,431,224,430,212,424,214,413,214,417,221,425,227"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Бескудниковский"
          coords="410,147,412,150,417,146,423,161,421,168,426,167,427,174,420,173,412,160,407,155,404,152"
          shape="poly"
        />
        <area
          target=""
          alt="#FFD670"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Дегунино восточное"
          coords="413,128,420,133,421,142,424,155,426,164,425,170,421,168,423,161,417,146,412,149,410,146,408,139,414,139"
          shape="poly"
        />
        {/* Конец Северный АО */}

        {/* Начало Северо-Восточный АО */}
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Северный"
          coords="398,87,410,85,407,76,413,73,414,79,425,73,430,75,430,80,420,80,420,88,424,88,423,96,419,96,419,108,417,119,406,120"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Бибирево"
          coords="433,118,444,124,461,130,460,132,451,138,450,140,448,143,446,145,442,145,437,139,432,138"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Лионозово"
          coords="405,120,415,119,426,117,433,119,432,138,433,139,429,139,423,138,420,133,414,129,407,124"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Алтуфьевский"
          coords="424,154,430,156,432,150,444,145,437,139,429,139,423,138,423,145"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Отрадное"
          coords="425,155,426,163,427,176,446,177,451,171,451,167,455,168,459,167,461,163,457,157,451,153,449,149,447,144,433,151,431,158"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Марфино"
          coords="442,202,427,188,429,181,426,175,436,176,432,182,432,187,437,187,442,192"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Бутырский"
          coords="433,226,431,224,429,213,433,211,430,210,429,201,426,196,426,189,427,188,442,204,446,210,442,213,438,213"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Марьина Роща"
          coords="448,210,458,221,458,227,448,226,449,232,446,236,444,236,440,233,439,227,433,227,438,214,443,213"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Северное Медведково"
          coords="461,129,476,132,480,130,480,132,486,132,481,142,477,144,470,145,470,150,460,146,461,142,450,140,455,136"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Южное Медведково"
          coords="452,139,461,141,459,147,470,150,467,155,464,159,459,159,455,156,450,152,447,144"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Алексеевский"
          coords="467,229,463,224,458,222,461,209,463,199,469,187,470,192,478,195,476,198,472,210,467,219"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Останкинский"
          coords="452,167,450,166,446,176,436,176,432,182,432,187,436,187,443,192,443,202,446,210,449,210,458,221,461,202,466,192,459,187,459,184,461,178,453,176"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Свиблово"
          coords="461,162,458,158,467,166,475,169,478,172,478,172,470,175,459,178,453,176,450,167,459,167,458,158,478,172"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Лосиноостровскмй"
          coords="481,143,483,149,479,156,486,159,504,141,496,133,489,130,486,132"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Ростокино"
          coords="478,172,473,182,476,184,478,195,472,192,469,187,466,192,458,187,461,178"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Бабушкинский"
          coords="486,159,478,172,475,167,461,159,468,153,470,144,475,144,481,141,481,158"
          shape="poly"
        />
        <area
          target=""
          alt="#FDFF85"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Ярославский"
          coords="502,141,509,143,512,147,510,150,506,153,498,158,492,164,504,164,504,172,501,176,492,175,490,169,487,175,481,184,473,182,479,169"
          shape="poly"
        />
        {/* Конец Северо-Восточный АО */}

        {/* Начало Восточный АО */}
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Сокольники"
          coords="467,230,487,236,493,236,493,232,496,227,493,219,495,215,492,209,489,209,484,204,478,196,472,212,467,219"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Метрогородок"
          coords="512,147,535,169,539,196,538,199,529,204,519,210,513,202,489,189,481,184,486,176,490,167,493,175,501,176,504,172,504,164,493,164"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Богородское"
          coords="518,210,509,210,504,215,495,218,495,215,492,208,489,210,479,198,478,184,481,184,506,199,515,202"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Преображенское"
          coords="518,211,518,225,512,225,509,230,502,230,498,234,495,234,496,226,495,219,501,216,509,210"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Гольяново"
          coords="535,168,561,191,565,197,569,205,561,208,550,210,538,210,524,217,518,219,519,211,532,203,539,199,539,196"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Восточный"
          coords="572,207,578,214,581,213,584,216,589,210,593,205,601,207,602,205,595,199,590,202,587,199,578,203,546,28,544,22,536,31,546,30,578,203"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Северное Измайлово"
          coords="567,205,572,208,569,217,526,217,538,210,550,211"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Восточное Измайлово"
          coords="547,230,559,230,562,226,567,231,569,230,569,216,550,217,550,223,547,225"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Ивановское"
          coords="570,266,562,271,564,265,561,265,559,259,547,254,547,231,559,231,562,226,565,231,570,231,570,239,573,242,572,245"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Измайлово"
          coords="522,256,536,251,539,253,547,248,547,226,550,222,549,216,526,217,519,220,518,230,518,248"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Соколиная Гора"
          coords="493,237,498,237,506,253,502,259,502,262,504,265,515,260,522,257,518,248,518,226,510,225,509,231,502,230,499,234,492,233"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Перово"
          coords="530,281,526,278,521,277,515,271,504,265,512,262,522,257,536,251,539,253,547,248,547,254,553,257,550,259,539,265"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Новогиреево"
          coords="530,281,562,270,565,265,559,265,561,259,553,256,550,261,539,265"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Вешняки"
          coords="570,265,570,299,567,302,541,289,530,281,552,275"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Новокосино"
          coords="579,284,570,284,572,270,575,272,595,266,598,275,592,273,584,278"
          shape="poly"
        />
        <area
          target=""
          alt="#B5FF90"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Косино-Ухтомский"
          coords="581,284,570,284,570,299,567,302,587,318,593,307,602,307,605,305,613,304,616,298,621,298,624,293,621,287,613,285,609,290,596,291,592,296,585,291,581,288"
          shape="poly"
        />
        {/* Конец Восточный АО */}

        {/* Начало Юго-Восточный АО */}
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Лефортово"
          coords="501,242,506,253,504,259,502,264,507,267,513,271,510,282,504,281,501,276,499,271,493,276,489,271,484,267,478,265,478,262,478,259,486,258,487,251,490,247,493,250"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Нижегородский"
          coords="481,285,495,296,502,290,504,293,527,285,527,282,532,281,529,278,521,276,513,271,510,282,504,279,502,278,499,271,495,276,490,285,486,281"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Южно-Портовый"
          coords="472,284,475,282,478,290,481,287,493,296,483,298,489,310,484,316,476,313,476,307"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Печатники"
          coords="501,291,509,302,510,313,513,322,510,333,507,342,498,356,492,365,479,356,479,347,481,342,492,337,499,331,501,327,499,322,493,319,489,316,486,316,489,308,483,298,496,296"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Марьино"
          coords="504,347,509,353,513,348,522,342,529,341,533,342,541,348,546,351,541,359,538,360,529,362,519,367,509,367,502,368,492,365"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Капотня"
          coords="547,351,570,351,572,353,561,367,559,370,546,384,542,384,541,373,539,367,541,359"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Люблино"
          coords="513,321,518,322,526,321,530,325,539,327,541,330,544,327,552,334,559,331,561,334,567,336,570,347,569,351,546,351,533,342,527,341,521,344,510,351,506,348,510,336"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Текстильщики"
          coords="504,293,515,290,519,301,518,305,526,321,518,321,513,321,509,302"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Рязанский"
          coords="530,281,547,293,544,305,538,304,533,296,524,301,519,302,516,291,526,285,526,281"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Кузьминки"
          coords="544,305,542,321,544,324,544,327,541,330,535,325,530,324,526,321,521,308,519,305,519,301,526,299,533,296,536,304"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Выхино-Жулебино"
          coords="547,293,579,311,578,314,582,319,579,321,582,324,581,328,579,336,564,324,567,336,559,331,553,333,544,327,542,319"
          shape="poly"
        />
        <area
          target=""
          alt="#8DFFFF"
          title=""
          onClick={myHover}
          onMouseOver={(e) => renderTooltip(e, true)}
          onMouseOut={(e) => renderTooltip(e, false)}
          href="Некрасовский"
          coords="602,307,612,305,616,298,622,298,625,294,628,299,633,299,639,302,639,307,627,307,630,311,639,314,624,316,633,322,636,328,636,337,612,336,609,327,612,322,615,317,609,314"
          shape="poly"
        />
        {/* Конец Юго-Восточный АО*/}
      </map>
      <svg
        ref={svgRef}
        className={s.imageMapperSvg}
        style={{ width: "100%" }}
      ></svg>
    </>
  );
};
