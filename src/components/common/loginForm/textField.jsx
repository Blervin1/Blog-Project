import React, { useState } from 'react';
import './index.css';

import eyeActive from '../../../assets/eye-active.svg';
import eyeHide from '../../../assets/eye-hide.svg';

const TextField = ({ label, type, name, value, onChange, error }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};

	const getInputClasses = () => {
		return 'input' + (error ? ' is-invalid' : '');
	};

	const toggleShowPassword = () => {
		setShowPassword(prevState => !prevState);
	};

	return (
		<div className='container'>
			<label htmlFor={name}>{label}</label>
			<div className='input-group'>
				<input
					type={showPassword ? 'text' : type}
					id={name}
					name={name}
					value={value}
					onChange={handleChange}
					className={getInputClasses()}
				/>
				{type === 'password' && (
					<button
						className='toggle__password'
						type='button'
						onClick={toggleShowPassword}
					>
						<img
							src={showPassword ? eyeActive : eyeHide}
							alt={showPassword ? 'Hide password' : 'Show password'}
						/>
					</button>
				)}
				{error && <div className='error'>{error}</div>}
			</div>
		</div>
	);
};

export default TextField;
