import React, {memo} from "react";
import {Controller, useForm} from "react-hook-form";
import cl from "./employee-info-form.module.scss";
import validator from "validator";
import {FormValues} from "../employee-info-form/employee-info-form.props";
import TextInput from "@ui/input/text";
import Select from "@ui/select/select";
import Calendar from "@ui/calendar/calendar";
import PhoneInput from "@ui/input/phone";
import EmailInput from "@ui/input/email";

const EmployeeInfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormValues>({
      mode: "onBlur"
  });

  const onSubmit = (data: FormValues) => {
      alert('Форма валидна, отправляется запрос')
      console.log('Form Data:', data);
      reset({
          lastName: '',
          firstName: '',
          middleName: '',
          gender: '',
          birthDate: '',
          phone: '',
          email: '',
          address: '',
          companyName: '',
      });
  };

  return (
      <div className={cl.container}>
          <h1 className={cl.title}>Информация о сотруднике</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
              <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: 'Поле является обязательным' }}
                  render={({ field }) => (
                      <TextInput placeholder="Фамилия" error={errors.lastName?.message} {...field} />
                  )}
              />
              <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: 'Поле является обязательным' }}
                  render={({ field }) => (
                      <TextInput placeholder="Имя" error={errors.firstName?.message} {...field} />
                  )}
              />
              <Controller
                  name="middleName"
                  control={control}
                  render={({ field }) => (
                      <TextInput placeholder="Отчество" {...field} />
                  )}
              />
              <div className={cl.gridGroup}>
                  <Controller
                      name="gender"
                      control={control} // передаем control
                      render={({ field }) => <Select {...field} control={control} error={errors.gender?.message} />}
                  />
                  <Controller
                      name="birthDate"
                      control={control}
                      rules={{ required: 'Поле является обязательным' }}
                      render={({ field }) => (
                          <Calendar error={errors.birthDate?.message} {...field} />
                      )}
                  />
                  <Controller
                      name="phone"
                      control={control}
                      rules={{
                          required: 'Поле является обязательным',
                          validate: (value) =>
                              validator.isMobilePhone(value.replace(/\D/g, ''), 'ru-RU') || 'Введите корректный номер телефона',
                      }}
                      render={({ field }) => (
                          <PhoneInput placeholder='Мобильный телефон' error={errors.phone?.message} {...field} />
                      )}
                  />
                  <Controller
                      name="email"
                      control={control}
                      rules={{
                          required: 'Поле является обязательным',
                          validate: (value) => validator.isEmail(value) || 'Введите корректный email',
                      }}
                      render={({ field }) => (
                          <EmailInput placeholder="Email" error={errors.email?.message} {...field} />
                      )}
                  />
              </div>
              <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                      <TextInput placeholder="Адрес постоянной регистрации" {...field} />
                  )}
              />
              <Controller
                  name="companyName"
                  control={control}
                  render={({ field }) => (
                      <TextInput placeholder="Название работодателя" {...field} />
                  )}
              />
              <div className={cl.btnPosition}>
                  <button type="submit" className={cl.btn}>
                      СОХРАНИТЬ
                  </button>
              </div>
          </form>
      </div>
  );
};

export default memo(EmployeeInfoForm);
