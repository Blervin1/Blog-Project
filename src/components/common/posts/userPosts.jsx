import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../../../api/fake.api/user.api';
import ListPosts from './listPosts';

const UserPosts = ({ maxPostsToShow, search }) => {
	const [userData, setUserData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchAllUsers();
			setUserData(data);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	const filteredPosts = userData.filter(item =>
		item.user.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<div>
				{isLoading ? (
					<div className='container loader'></div>
				) : (
					filteredPosts
						.slice(0, maxPostsToShow)
						.map(item => (
							<ListPosts
								key={item.id}
								id={item.id}
								title={item.title}
								text={item.text}
								author={`${item.user}`}
							/>
						))
				)}
			</div>
		</>
	);
};

export default UserPosts;
