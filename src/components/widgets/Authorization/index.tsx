import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Login } from "./Login";
import { Registration } from "./Registration";
import s from "./style.module.css";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    code: yup.string().required(),
    companyName: yup.string().required(),
    inn: yup.string().required(),
    site: yup.string().required(),
    industry: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    job: yup.string().required(),
  })
  .required();

export const Authorization = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isRegistration, setIsRegistration] = useState<boolean>(false);

  const handleLogUp = (event: any) => {
    event.stopPropagation();
    setIsRegistration(true);
  };

  const handleLogIn = (event: any) => {
    event.stopPropagation();
    setIsRegistration(false);
  };

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div className={s.wrapper}>
      {!isRegistration ? (
        <Login handleLogUp={handleLogUp} />
      ) : (
        <Registration
          activeStep={activeStep}
          handleLogIn={handleLogIn}
          handleNextStep={handleNextStep}
        />
      )}
    </div>
  );
};
