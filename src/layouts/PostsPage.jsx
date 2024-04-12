import React, { useState } from 'react';
import SearchUsers from '../components/common/posts/searchUsers';
import UserPosts from '../components/common/posts/userPosts';

const PostsPage = () => {
	const [search, setSearch] = useState('');

	const handleSearchChange = value => {
		setSearch(value);
	};
	return (
		<>
			<div className='container'>
				<p className='posts__title'>
					{
						<span className='searchPages'>
							Cтатьи:
							<SearchUsers onSearch={handleSearchChange} />
						</span>
					}
				</p>
				<UserPosts maxPostsToShow={Infinity} search={search} />
			</div>
		</>
	);
};

export default PostsPage;
