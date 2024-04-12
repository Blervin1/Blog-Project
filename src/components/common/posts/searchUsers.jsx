import React, { useState } from 'react';

const SearchUsers = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearchChange = event => {
		const value = event.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	return (
		<input
			type='text'
			placeholder='Поиск по пользователю'
			value={searchTerm}
			onChange={handleSearchChange}
			className='search-input'
		/>
	);
};

export default SearchUsers;
