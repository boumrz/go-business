import { useEffect } from "react";
import {
  FormProvider,
  Controller,
  useForm,
  useFormState,
} from "react-hook-form";
import { Typography, TextField, Button } from "@mui/material";
import { usePostLoginUserMutation, STORAGE } from "@/services";
import { useAuthContext } from "@/contexts";
import s from "./styles.module.css";

const ariaLabel = { "aria-label": "description" };

interface LoginProps {
  handleLogUp: (event: any) => void;
}

export const Login = ({ handleLogUp }: LoginProps) => {
  const { handleToken } = useAuthContext();
  const [postLogin, { data: login }] = usePostLoginUserMutation();
  const formData = useForm({
    mode: "onSubmit",
  });
  const { handleSubmit: handleSubmitForm1, control } = formData;
  const { errors } = useFormState({ control });

  useEffect(() => {
    if (login?.token) {
      STORAGE.setToken(login.token);
      handleToken();
    }
  }, [login]);

  const onLogin = (formData: any) => {
    postLogin({
      email: formData.login,
      password: formData.pass,
    });
  };

  return (
    <>
      <Typography className={s.text} variant="h3">
        Вход
      </Typography>
      <FormProvider {...formData}>
        <form className={s.form} onSubmit={handleSubmitForm1(onLogin)}>
          <Controller
            control={control}
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
            control={control}
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

          <div className={s.buttons}>
            <button
              className={s.prevButton}
              type="button"
              onClick={handleLogUp}
            >
              Зарегистрироваться
            </button>
            <button className={s.button} type="submit">
              Завершить
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
