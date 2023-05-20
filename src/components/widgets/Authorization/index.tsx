import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Typography, Button } from "@mui/material";
import * as yup from "yup";
import cn from "clsx";
import s from "./style.module.css";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
  })
  .required();

const ariaLabel = { "aria-label": "description" };

export const Authorization = () => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = useFormState({ control });

  const handleLogUp = (event: any) => {
    event.stopPropagation();
    setIsRegistration(true);
  };

  const handleLogIn = (event: any) => {
    event.stopPropagation();
    setIsRegistration(false);
  };

  function onSubmit(formData: any) {
    console.log("formData", formData);
  }

  return (
    <div className={s.wrapper}>
      {!isRegistration ? (
        <>
          <Typography className={s.text} variant="h3">
            Вход
          </Typography>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="email"
              label="Адрес эл. почты"
              placeholder="ivanov@mail.ru"
              inputProps={ariaLabel}
              {...register("email")}
            />

            {errors.email?.type === "required" && (
              <span>Это поле обязательно для заполнения</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>Некорректный email адрес</span>
            )}

            <TextField
              type="passowrd"
              label="Пароль"
              inputProps={ariaLabel}
              {...register("password")}
            />
            {errors.password?.type === "required" && (
              <span>Это поле обязательно для заполнения</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Минимальное количество символов - 6</span>
            )}

            <div className={s.buttons}>
              <Button variant="text" type="button" onClick={handleLogUp}>
                Зарегистрироваться
              </Button>
              <Button variant="contained" type="submit">
                Далее
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <Typography className={s.text} variant="h3">
            Регистрация
          </Typography>
          <form
            className={cn(s.form, s.registration)}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={s.fieldset}>
              <div className={s.personal}>
                <Typography variant="subtitle1">Личные данные</Typography>
                <TextField
                  fullWidth
                  type="text"
                  label="Имя"
                  placeholder="Иван"
                  inputProps={ariaLabel}
                  {...register("name")}
                />
              </div>
              <TextField
                type="text"
                label="Фамилия"
                placeholder="Иванов"
                inputProps={ariaLabel}
                {...register("surname")}
              />
              <TextField
                type="text"
                label="Отчество"
                placeholder="Иванович"
                inputProps={ariaLabel}
                {...register("middlename")}
              />
              <TextField
                type="text"
                label="Должность"
                placeholder="Исполнительный директор"
                inputProps={ariaLabel}
                {...register("jobPosition")}
              />
            </div>

            <div className={s.fieldset}>
              <div className={s.personal}>
                <Typography variant="subtitle1">Данные о компании</Typography>
                <TextField
                  type="text"
                  label="Наименование организации"
                  placeholder="Иванов и компания"
                  inputProps={ariaLabel}
                  {...register("orgName")}
                />
              </div>
              <TextField
                type="text"
                label="ИНН *"
                placeholder="111111111"
                inputProps={ariaLabel}
                {...register("inn")}
              />
              <TextField
                type="email"
                label="Адрес сайта"
                placeholder="ivanov@mail.ru"
                inputProps={ariaLabel}
                {...register("email")}
              />
              <TextField
                type="text"
                label="Отрасль деятельности"
                placeholder="введите ключевое слово"
                inputProps={ariaLabel}
                {...register("industry")}
              />
              <TextField
                type="text"
                label="Страна"
                placeholder="введите ключевое слово"
                inputProps={ariaLabel}
                {...register("country")}
              />
              <TextField
                type="text"
                label="Город"
                placeholder="введите ключевое слово"
                inputProps={ariaLabel}
                {...register("city")}
              />
            </div>

            <div className={s.fieldset}>
              <div className={s.personal}>
                <Typography variant="subtitle1">Пароль</Typography>
                <Typography variant="body1">
                  Пароль должен содержать не менее восьми знаков, включать
                  буквы, цифры и специальные символы
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  label="Пароль"
                  inputProps={ariaLabel}
                  {...register("password")}
                />
              </div>
              <TextField
                type="password"
                label="Подтверждение пароля"
                inputProps={ariaLabel}
                {...register("passwordConfirm")}
              />
            </div>

            <div className={s.buttons}>
              <Button variant="text" type="submit" onClick={handleLogIn}>
                Войти
              </Button>
              <Button variant="contained" type="submit">
                Далее
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
