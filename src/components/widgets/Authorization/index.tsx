import { useState } from "react";
import {
  useForm,
  useFormState,
  FormProvider,
  Controller,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { PersonalData, Final } from "@/components";
import * as yup from "yup";
import cn from "clsx";
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

const ariaLabel = { "aria-label": "description" };

export const Authorization = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const formData1 = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });
  const formData2 = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });
  const { handleSubmit: handleSubmitForm1, control: controlForm1 } = formData1;
  const { handleSubmit, control } = formData2;

  const { errors } = useFormState({ control });

  const handleLogUp = (event: any) => {
    event.stopPropagation();
    setIsRegistration(true);
  };

  const handleLogIn = (event: any) => {
    event.stopPropagation();
    setIsRegistration(false);
  };

  const onSubmit = (formData: any) => {
    console.log("formData", formData);
  };

  const onSubmitRegistration = (formData: any) => {
    console.log("onSubmitRegistration", formData);
  };

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div className={s.wrapper}>
      {!isRegistration ? (
        <>
          <Typography className={s.text} variant="h3">
            Вход
          </Typography>
          <FormProvider {...formData1}>
            <form className={s.form} onSubmit={handleSubmitForm1(onSubmit)}>
              <Controller
                control={controlForm1}
                name="login"
                render={({ field }) => (
                  <TextField
                    type="email"
                    label="Адрес эл. почты"
                    placeholder="ivanov@mail.ru"
                    inputProps={ariaLabel}
                    {...field}
                  />
                )}
              />

              {errors.email?.type === "required" && (
                <span>Это поле обязательно для заполнения</span>
              )}
              {errors.email?.type === "pattern" && (
                <span>Некорректный email адрес</span>
              )}

              <Controller
                control={controlForm1}
                name="pass"
                render={({ field }) => (
                  <TextField
                    type="password"
                    label="Пароль"
                    inputProps={ariaLabel}
                    {...field}
                  />
                )}
              />

              {errors.pass?.type === "required" && (
                <span>Это поле обязательно для заполнения</span>
              )}
              {/* {errors.password?.type === "minLength" && (
                <span>Минимальное количество символов - 6</span>
              )} */}

              <div className={s.buttons}>
                <Button variant="text" type="button" onClick={handleLogUp}>
                  Зарегистрироваться
                </Button>
                <Button variant="contained" type="submit">
                  Далее
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      ) : (
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
          <FormProvider {...formData2}>
            <form
              className={cn(s.form, s.registration)}
              onSubmit={handleSubmit(onSubmitRegistration)}
            >
              {activeStep === 1 && <PersonalData />}
              {activeStep === 2 && <Final />}

              <div className={s.buttons}>
                <Button variant="text" type="button" onClick={handleLogIn}>
                  Войти
                </Button>
                {activeStep !== 2 ? (
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleNextStep}
                  >
                    Далее
                  </Button>
                ) : (
                  <Button variant="contained" type="submit">
                    Завершить
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};
