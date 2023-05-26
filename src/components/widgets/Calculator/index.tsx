import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Typography, Box, CircularProgress } from "@mui/material";
import {
  useGetEquipmentListQuery,
  useGetRegionListQuery,
  useGetDistrictListQuery,
  useGetAccountingListQuery,
  useGetIndustryListQuery,
} from "@/services";
// @ts-ignore
import { LayerIcon } from "@/assets/icons";
import { CalculatorForm } from "./CalculatorForm";
import s from "./styles.module.css";

export const Calculator = () => {
  const [subindustryTransform, setSubindustryTransform] = useState([]);
  const formData = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });
  const { watch } = formData;
  const data = watch();
  // @ts-ignore
  const legalForm = data?.legalForm;
  // @ts-ignore
  const industry = data?.industry;
  console.log("data", data);
  console.log("subindustryTransform", subindustryTransform);

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

  const { data: equipments, isFetching: isFetchingEquipment } =
    useGetEquipmentListQuery();
  const { data: accounting, isFetching: isFetchingAccounting } =
    useGetAccountingListQuery();
  const { data: regions, isFetching: isFetchingRegion } =
    useGetRegionListQuery();
  const { data: districts, isFetching: isFetchingDistrict } =
    useGetDistrictListQuery();
  const { data: industries } = useGetIndustryListQuery({
    name: industry?.name,
  });

  console.log("accounting", accounting);
  console.log("regions", regions);
  console.log("districts", districts);
  console.log("industries", industries);

  if (
    isFetchingAccounting ||
    isFetchingDistrict ||
    isFetchingEquipment ||
    isFetchingRegion
  ) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

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
          margin: "auto",
        }}
        className={s.calculator}
      >
        <FormProvider {...formData}>
          <CalculatorForm
            equipments={equipments}
            districts={districts}
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
