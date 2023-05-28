import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Typography, Box, CircularProgress } from "@mui/material";
import {
  useGetEquipmentListQuery,
  useGetRegionListQuery,
  useGetIndustryListQuery,
  useGetBuildingsListQuery,
  usePostCalculationMutation,
  useGetCapitalBuildingsListQuery,
  STORAGE,
} from "@/services";
// @ts-ignore
import { LayerIcon } from "@/assets/icons";
import { useMapsContext, useMainContext } from "@/contexts";
import { CalculatorForm } from "./CalculatorForm";
import { Results } from "@/components";
import s from "./styles.module.css";

export const Calculator = () => {
  const { labels, handleChangeLabels } = useMapsContext();
  const { handleSetCalculationResults } = useMainContext();
  const [subindustryTransform, setSubindustryTransform] = useState([]);
  const [isResult, setIsResult] = useState<boolean>(false);
  const formData = useForm({
    mode: "onSubmit",
    defaultValues: {
      typeBuild: [
        {
          type: "",
          value: "",
        },
      ],
      capitalType: [
        {
          type: "",
          value: "",
        },
      ],
      equipmentType: [
        {
          type: "",
          count: "",
        },
      ],
      otherType: [
        {
          type: "",
        },
      ],
    },
  });
  const { watch } = formData;
  const data = watch();
  // @ts-ignore
  const legalForm = data?.organizationalAndLegalForm;
  // @ts-ignore
  const industry = data?.industryId;
  // @ts-ignore
  const districts = data?.districts;

  useEffect(() => {
    if (industry) {
      setSubindustryTransform(
        industry.subindustry.map((item: any) => ({
          ...item,
          label: item.name,
        }))
      );
    }
  }, [industry]);

  useEffect(() => {
    if (districts) {
      console.log("labels", labels);
      const tempLabel =
        districts
          .filter(({ label }: any) => {
            let flag = false;

            labels.forEach(({ item }) => {
              if (item === label) {
                flag = true;
              }
            });

            if (!flag) {
              return true;
            }

            return false;
          })
          .map(({ label }: any) => ({ item: label })) || [];

      handleChangeLabels([...labels, ...tempLabel]);
    }
  }, [districts]);

  const [postCalculation, { data: dataResults }] = usePostCalculationMutation();
  const { data: equipments, isFetching: isFetchingEquipment } =
    useGetEquipmentListQuery();
  const { data: regions, isFetching: isFetchingRegion } =
    useGetRegionListQuery();
  const {
    data: buildings,
    isFetching: isFetchingBuildings,
    isError,
  } = useGetBuildingsListQuery();
  const { data: capitalBuildings, isFetching: isFetchingCapitalBuildings } =
    //@ts-ignore
    useGetCapitalBuildingsListQuery();
  const { data: industries } = useGetIndustryListQuery({
    name: industry?.name,
  });

  if (isError) {
    STORAGE.clear();
  }

  useEffect(() => {
    if (dataResults) {
      setIsResult(true);
      handleSetCalculationResults(dataResults);
    }
  }, [dataResults]);

  if (
    isFetchingEquipment ||
    isFetchingRegion ||
    isFetchingBuildings ||
    isFetchingCapitalBuildings
  ) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  const onSubmit = (data: any, event: any) => {
    if (event.keyCode === 13) {
      return;
    }
    postCalculation({
      regionNames: labels?.map(({ item }: any) => item),
      organizationalAndLegalForm: data.organizationalAndLegalForm?.name || "",
      taxationSystemType: data.taxationSystemType?.name || "",
      industryId: data.industryId?.id || "f4117186-fcfc-11ed-be56-0242ac120002",
      areaOnRegions: data?.areaOnRegions || "",
      buildingCostIdAndAreaPairList: data.typeBuild?.map(
        ({ type, value }: any) =>
          ({
            first: type.id,
            second: value,
          } || [])
      ),
      otherCapitalBuildingCostIdAndAreaPairList: data.capitalType?.map(
        ({ type, value }: any) =>
          ({
            first: type.id,
            second: value,
          } || [])
      ),
      equipmentIdAndCountPairList: data.equipmentType?.map(
        ({ type, count }: any) =>
          ({
            first: type.id,
            second: count,
          } || [])
      ),
      staffCount: data?.staffCount || "",
      averageSalary: data?.averageSalary || "",
      otherNeeds: data.otherType?.map(({ type }: any) => type) || [],
    });
  };

  if (isResult) {
    return <Results isResult={isResult} handleResultModal={setIsResult} />;
  }

  return (
    <Box className={s.wrapper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-start" },
        }}
        className={s.header}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: { xs: "450px", lg: "546px" },
            gap: "16px",
          }}
        >
          <LayerIcon className={s.layerIcon} />
          <Typography
            sx={{
              fontSize: { xs: "24px !important", sm: "36px !important" },
            }}
            className={s.title}
            variant="h2"
          >
            Инвестиционный калькулятор города Москвы
          </Typography>
          <Typography className={s.title} variant="body1">
            Объем инвестиций в один клик
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "470px", lg: "605px" },
            height: { md: "428px", lg: "428px" },
          }}
        >
          <div className={s.imgWrapper} />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "320px", sm: "400px", md: "800px", lg: "900px" },
          boxShadow: {
            xs: "none",
            sm: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
          },
          margin: "0 auto",
          marginBottom: "64px",
        }}
        className={s.calculator}
      >
        <FormProvider {...formData}>
          <CalculatorForm
            equipments={equipments}
            districts={regions}
            capitalBuildings={capitalBuildings}
            buildings={buildings}
            industries={industries}
            subindustryTransform={subindustryTransform}
            legalForm={legalForm}
            onSubmit={onSubmit}
          />
        </FormProvider>
      </Box>
    </Box>
  );
};
