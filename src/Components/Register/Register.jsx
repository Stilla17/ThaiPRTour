import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import Registernav from '../Nav/Registernav.jsx';
import Select from 'react-select';
import FooterList from '../Footer/Footer.jsx';

const countryOptions = [
  { value: 'Polsha', label: 'Польша' },
  { value: 'Rossiya', label: 'Россия' },
  { value: 'Po11a', label: 'По11а' },
];
const defaultValues = {
  name: '',
  surname: '',
  login: '',
  nickname: '',
  email: '',
  telegram: '',
  password: '',
  password_repeat: '',
  country: null,
  birth_day: null,
  birth_month: null,
  birth_year: null,
  gender: ''
};
const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: String(i + 1),
}));
 const registerdata = async (data) => {
    try {
      const response = await fetch('https://68c141a798c818a69401336f.mockapi.io/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Ошибка при отправке данных');
      const result = await response.json();
      console.log('Данные успешно отправлены:', result);
      reset(defaultValues);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
const monthOptions = [
  { value: '1', label: 'Января' },
  { value: '2', label: 'Февраля' },
  { value: '3', label: 'Марта' },
  { value: '4', label: 'Апреля' },
  { value: '5', label: 'Мая' },
  { value: '6', label: 'Июня' },
  { value: '7', label: 'Июля' },
  { value: '8', label: 'Августа' },
  { value: '9', label: 'Сентября' },
  { value: '10', label: 'Октября' },
  { value: '11', label: 'Ноября' },
  { value: '12', label: 'Декабря' },
];

const yearOptions = Array.from({ length: 80 }, (_, i) => ({
  value: 2024 - i,
  label: String(2024 - i),
}));

   const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm(defaultValues);



  return (
    <>
      <Registernav/>

      <Form onSubmit={handleSubmit(registerdata)}>
        <StyledWrapper>
          <div className="inputGroup">
            <input
              type="text"
              autoComplete="off"
              {...register('name', { required: 'Введите имя' })}
              className={errors.name ? 'error' : ''}
              required
            />
            <label>Имя*</label>
            {errors.name && <p className="errorText">{errors.name.message}</p>}
          </div>

          <div className="inputGroup">
            <input
              type="text"
              autoComplete="off"
              {...register('surname', { required: 'Введите фамилию' })}
              className={errors.surname ? 'error' : ''}
              required
            />
            <label>Фамилия*</label>
            {errors.surname && (
              <p className="errorText">{errors.surname.message}</p>
            )}
          </div>

          <div className="inputGroup">
            <input
              type="text"
              autoComplete="off"
              {...register('login', { required: 'Введите логин' })}
              className={errors.login ? 'error' : ''}
              required
            />
            <label>Логин*</label>
            {errors.login && (
              <p className="errorText">{errors.login.message}</p>
            )}
          </div>

          <div className="inputGroup">
            <input
              type="text"
              autoComplete="off"
              {...register('nickname', { required: 'Придумайте никнейм' })}
              className={errors.nickname ? 'error' : ''}
              required
            />
            <label>Придумайте никнейм</label>
            {errors.nickname && (
              <p className="errorText">{errors.nickname.message}</p>
            )}
          </div>

          <div className="inputGroup">
            <input
              type="email"
              autoComplete="off"
              {...register('email', { required: 'Введите email' })}
              className={errors.email ? 'error' : ''}
              required
            />
            <label>E-Mail*</label>
            {errors.email && (
              <p className="errorText">{errors.email.message}</p>
            )}
          </div>

          <div className="inputGroup">
            <input
              type="text"
              autoComplete="off"
              {...register('telegram', { required: 'Введите Telegram' })}
              className={errors.telegram ? 'error' : ''}
              required
            />
            <label>Telegram*</label>
            {errors.telegram && (
              <p className="errorText">{errors.telegram.message}</p>
            )}
          </div>

          <div className="inputGroup">
            <input
              type="password"
              autoComplete="off"
              {...register('password', { required: 'Введите пароль' })}
              className={errors.password ? 'error' : ''}
              required
            />
            <label>Придумайте пароль*</label>
            {errors.password && (
              <p className="errorText">{errors.password.message}</p>
            )}
          </div>

          <div className="inputGroup">
            <input
              type="password"
              autoComplete="off"
              {...register('password_repeat', { required: 'Повторите пароль' })}
              className={errors.password_repeat ? 'error' : ''}
              required
            />
            <label>Пароль ещё раз*</label>
            {errors.password_repeat && (
              <p className="errorText">{errors.password_repeat.message}</p>
            )}
          </div>

          <div className="inputGroup">
            <Controller
              name="country"
              control={control}
              rules={{ required: 'Выберите страну' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={countryOptions}
                  placeholder="Выберите страну"
                  classNamePrefix="my-select"
                />
              )}
            />
            {errors.country && (
              <p className="errorText">{errors.country.message}</p>
            )}
          </div>

          <div className="birthBlock">
            <p className="birthLabel">Дата рождения*</p>
            <div className="birthRow">
              <Controller
                name="birth_day"
                control={control}
                rules={{ required: 'Выберите день' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={dayOptions}
                    placeholder="День"
                    classNamePrefix="my-select"
                    menuPosition="fixed"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        minHeight: '40px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        paddingLeft: '5px',
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: '#000',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                      }),
                    }}
                  />
                )}
              />

              <Controller
                name="birth_month"
                control={control}
                rules={{ required: 'Выберите месяц' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={monthOptions}
                    placeholder="Месяц"
                    classNamePrefix="my-select"
                  />
                )}
              />

              <Controller
                name="birth_year"
                control={control}
                rules={{ required: 'Выберите год' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={yearOptions}
                    placeholder="Год"
                    classNamePrefix="my-select"
                  />
                )}
              />
            </div>

            {(errors.birth_day || errors.birth_month || errors.birth_year) && (
              <p className="errorText">Заполните дату рождения</p>
            )}
          </div>

          <div className="genderBlock">
            <p className="genderLabel">Укажите ваш пол</p>
            <div className="genderRow">
              <label className="checkWrap">
                <input
                  type="radio"
                  value="male"
                  {...register('gender', { required: true })}
                />
                <div className="box">
                  <svg fill="none" viewBox="0 0 24 24" className="checkIcon">
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                Мужской
              </label>

              <label className="checkWrap">
                <input
                  type="radio"
                  value="female"
                  {...register('gender', { required: true })}
                />
                <div className="box">
                  <svg fill="none" viewBox="0 0 24 24" className="checkIcon">
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                Женский
              </label>
            </div>
          </div>

          <button type="submit" className="submitBtn">
            Зарегистрироваться
          </button>
        </StyledWrapper>
      </Form>
      <FooterList/>
    </>
  );
};

const Form = styled.form`
  width: 100%;
`;

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 40px;

  .inputGroup {
    font-family: 'Segoe UI', sans-serif;
    margin: 1.4em auto;
    max-width: 300px;
    position: relative;
  }

  .inputGroup input {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid rgb(200, 200, 200);
    background-color: transparent;
    border-radius: 20px;
    width: 100%;
    transition: 0.2s;
  }

  .inputGroup input.error {
    border-color: #ff3b3b;
  }

  .errorText {
    font-size: 12px;
    color: #ff3b3b;
    margin-top: 5px;
    margin-left: 5px;
  }

  .inputGroup label {
    font-size: 100%;
    position: absolute;
    left: 0;
    padding: 0.8em;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: rgb(100, 100, 100);
  }

  .inputGroup :is(input:focus:valid, input:focus, input:valid) ~ label {
    transform: translateY(-50%) scale(0.9);
    margin-left: 1.3em;
    padding: 0.4em;
    background-color: white;
    border-radius: 20px;
  }

  .inputGroup :is(input:focus, input:valid) {
    border-color: rgb(150, 150, 200);
  }

  .submitBtn {
    margin: 30px auto;
    display: block;
    padding: 12px 30px;
    border-radius: 20px;
    border: none;
    background: #FE8505;
    color: white;
    cursor: pointer;
    font-size: 17px;
  }

  .genderBlock {
    max-width: 300px;
    margin: 0 auto 20px auto;
  }

  .genderLabel {
    font-size: 13px;
    font-family: 'Segoe UI';
    margin-bottom: 4px;
    color: rgb(80, 80, 80);
  }

  .genderRow {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  .checkWrap {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-size: 13px;
  }

  .checkWrap input {
    display: none;
  }

  .checkWrap .box {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #a2a1a8;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: 0.25s;
  }

  .checkWrap .checkIcon {
    width: 12px;
    height: 12px;
    stroke: white;
    opacity: 0;
    transition: 0.25s;
  }

  .checkWrap input:checked + .box {
    background: #7152f3;
    border-color: #7152f3;
  }

  .checkWrap input:checked + .box .checkIcon {
    opacity: 1;
  }

  .birthBlock {
    max-width: 300px;
    margin: 15px auto;
  }

  .birthLabel {
    font-size: 13px;
    font-family: 'Segoe UI';
    margin-bottom: 4px;
    color: rgb(80, 80, 80);
  }

  .birthRow {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .my-select__control {
    border-radius: 20px;
    border: 2px solid rgb(200, 200, 200);
    padding: 0.1em 0.2em;
    &:hover {
      border-color: rgb(150, 150, 200);
    }
  }

  .my-select__menu {
    border-radius: 10px;
  }

  .my-select__option {
    padding: 0.8em;
  }
`;

export default Register;
