import React, { useState } from 'react'
const RegisterForm = () => {
	const [data, setData] = useState({
		firstName: '',
		LastName: '',
		email: '',
		password: '',
		sex: 'male',
		licence: false,
	});

	console.log(data);

	return (
		<div>
			<h1>Register FORM</h1>
		</div>
	);
};

export default RegisterForm;
