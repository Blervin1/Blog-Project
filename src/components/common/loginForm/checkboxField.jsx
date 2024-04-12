import React from 'react';
import './index.css';

const CheckBoxField = ({ name, value, onChange, children, error }) => {
	const handleChange = () => {
		onChange({ name: name, value: !value });
	};

	const getInputClasses = () => {
		return 'checkbox' + (error ? '  is-invalid' : '');
	};

	return (
		<div className='checkbox container'>
			<input
				className={getInputClasses()}
				type='checkbox'
				value=''
				id={name}
				onChange={handleChange}
				checked={value}
			/>
			<label className='checkbox-label' htmlFor={name}>
				{children}
			</label>
			{error && <div className='errors'>{error}</div>}
		</div>
	);
};

export default CheckBoxField;
