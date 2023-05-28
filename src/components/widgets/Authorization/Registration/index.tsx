import { FormProvider, useForm } from "react-hook-form";
import { Typography, Stepper, Step, StepLabel } from "@mui/material";
import { PersonalData, Final } from "@/components";
import { usePostRegisterUserMutation } from "@/services";
import cn from "clsx";
import s from "./styles.module.css";
import { useEffect } from "react";

interface RegistrationProps {
  activeStep: number;
  handleLogIn: (event: any) => void;
  handleNextStep: (event: any) => void;
  handleReturnLogin: any;
}

export const Registration = ({
  activeStep,
  handleLogIn,
  handleNextStep,
  handleReturnLogin,
}: RegistrationProps) => {
  const [postRegister, responseRegister] = usePostRegisterUserMutation();

  const formData = useForm({
    mode: "onSubmit",
  });

  const { handleSubmit } = formData;

  const onRegister = (formData: any) => {
    console.log("onSubmitRegistration", formData);
    postRegister(formData);
  };

  useEffect(() => {
    if (responseRegister.isSuccess) {
      handleReturnLogin(false);
    }
  }, [responseRegister.isSuccess]);

  return (
    <>
      <Typography className={s.text} variant="h3">
        Регистрация
      </Typography>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Личные данные</StepLabel>
        </Step>
        <Step>
          <StepLabel>Подробная информация</StepLabel>
        </Step>
      </Stepper>
      <FormProvider {...formData}>
        <form
          className={cn(s.form, s.registration)}
          // onSubmit={handleSubmit(onRegister)}
        >
          {activeStep === 1 && <PersonalData />}
          {activeStep === 2 && <Final />}

          <div className={s.buttons}>
            <button
              className={s.prevButton}
              type="button"
              onClick={handleLogIn}
            >
              Войти
            </button>
            {activeStep !== 2 ? (
              <button
                className={s.button}
                type="button"
                onClick={handleNextStep}
              >
                Далее
              </button>
            ) : (
              <button
                className={s.button}
                type="submit"
                onClick={handleSubmit(onRegister)}
              >
                Завершить
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};
