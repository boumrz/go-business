import { FormProvider, useForm } from "react-hook-form";
import { Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import { PersonalData, Final } from "@/components";
import { usePostRegisterUserMutation } from "@/services";
import cn from "clsx";
import s from "./styles.module.css";

interface RegistrationProps {
  activeStep: number;
  handleLogIn: (event: any) => void;
  handleNextStep: () => void;
}

export const Registration = ({
  activeStep,
  handleLogIn,
  handleNextStep,
}: RegistrationProps) => {
  const [postRegister, _responseRegister] = usePostRegisterUserMutation();

  const formData = useForm({
    mode: "onSubmit",
  });

  const { handleSubmit } = formData;

  const onRegister = (formData: any) => {
    console.log("onSubmitRegistration", formData);
    postRegister(formData);
  };

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
          onSubmit={handleSubmit(onRegister)}
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
                onClick={handleNextStep}
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
