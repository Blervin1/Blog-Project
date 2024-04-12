import React, { useState } from 'react';
import './index.css';
import SearchUsers from './searchUsers';
import UserPosts from './userPosts';

const Posts = () => {
	const [search, setSearch] = useState('');

	const handleSearchChange = value => {
		setSearch(value);
	};

	return (
		<div className='bg'>
			<div className='container'>
				<h1 className='posts__title'>
					Статьи: {<SearchUsers onSearch={handleSearchChange} />}
				</h1>
				<div className='posts'>
					<UserPosts maxPostsToShow={3} search={search} />
				</div>
			</div>
		</div>
	);
};

export default Posts;
