import { useForm } from "react-hook-form";
import { Typography, Button } from "@mui/material";
import { calculatorFormMap, calculatorConfig } from "@/components";
import cn from "clsx";
import s from "./styles.module.css";

export const Calculator = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      industry: "Option 1",
      select2: "option2",
    },
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className={s.wrapper}>
      <section className={s.header}>
        <Typography className={s.title} variant="h2">
          Онлайн калькулятор
        </Typography>
        <Typography className={s.title} variant="body1">
          Расчёт объема возможных затрат
        </Typography>
      </section>
      <section className={s.calculator}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Typography className={s.title} variant="h3">
            Параметры бизнеса
          </Typography>
          {calculatorConfig.map(
            ({ label1, label2, label, name, title, type, description }) => {
              return (
                <div
                  className={cn(s.fieldset, {
                    [s.multiple]: name === "object",
                  })}
                >
                  <div className={s.wrapperItem}>
                    <Typography variant="subtitle1">{title}</Typography>
                    {description && (
                      <Typography className={s.secondary} variant="body1">
                        {description}
                      </Typography>
                    )}
                  </div>
                  {
                    calculatorFormMap({
                      label1,
                      label2,
                      label,
                      name,
                      title,
                      type,
                      description,
                      control,
                    })[name]
                  }
                </div>
              );
            }
          )}
          <Button type="submit">Расчитать</Button>
        </form>
      </section>
    </div>
  );
};
