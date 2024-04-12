import React, { useEffect, useState } from 'react';
import { validator } from '../../../utils/validator';
import CheckBoxField from './checkboxField';
import TextField from './textField';

import './index.css';

const LoginForm = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		stayOn: false,
	});
	const [errors, setErrors] = useState({});

	const handleChange = target => {
		setData(prevState => ({
			...prevState,
			[target.name]: target.value,
		}));
	};

	const validatorConfig = {
		email: {
			isRequired: {
				message: 'Электронная почта обязательна для заполнения',
			},
			isEmail: {
				message: 'Email введен некорректно',
			},
		},
		password: {
			isRequired: {
				message: 'Пароль обязателен для заполнения',
			},
			isCapitalSymbol: {
				message: 'Пароль должен содержать хотя бы одну заглавную букву',
			},
			isContainDigit: {
				message: 'Пароль должен содержать хотя бы одно число',
			},
			min: {
				message: 'Пароль должен состоять минимум из 8 символов',
				value: 8,
			},
		},
	};

	useEffect(() => {
		validate();
	}, [data]);

	const validate = () => {
		const errors = validator(data, validatorConfig);
		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const isValid = Object.keys(errors).length === 0;

	const handleSubmit = e => {
		e.preventDefault();
		const isValid = validate();
		if (!isValid) return;
		console.log(data);
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<TextField
				label='Электронная почта'
				name='email'
				value={data.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<TextField
				label='Пароль'
				type='password'
				name='password'
				value={data.password}
				onChange={handleChange}
				error={errors.password}
			/>
			<div className='submission_form'>
				<button className='btn-form' type='submit' disabled={!isValid}>
					Войти
				</button>
				<CheckBoxField
					value={data.stayOn}
					onChange={handleChange}
					name='stayOn'
				>
					Оставаться в системе
				</CheckBoxField>
			</div>
		</form>
	);
};

export default LoginForm;