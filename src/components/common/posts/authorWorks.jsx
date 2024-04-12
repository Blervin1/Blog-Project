import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllUsers } from '../../../api/fake.api/user.api';
import ListPosts from './listPosts';

const AuthorWorks = () => {
	const { authorId } = useParams();
	const [authorPosts, setAuthorPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchAuthorPosts = async () => {
			try {
				const allUsers = await fetchAllUsers();
				// console.log('Данные:', allUsers);
				const postsByAuthor = authorId
					? allUsers.filter(user => user.user === authorId)
					: allUsers;
				// console.log('Отфильтрованные посты:', postsByAuthor);
				setAuthorPosts(postsByAuthor);
				setIsLoading(false);
			} catch (error) {
				console.error('Ошибка при получении постов автора:', error);
			}
		};

		fetchAuthorPosts();
	}, [authorId]);

	return (
		<div>
			{isLoading ? (
				<p className='container loader'></p>
			) : (
				<div className='container'>
					{
						<h1 className='author-title'>
							<span>Статьи пользователя: </span>
							{authorId}
						</h1>
					}
					{authorPosts.map(user => (
						<ListPosts
							key={user.id}
							id={user.id}
							title={user.title}
							text={user.text}
							author={user.author}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default AuthorWorks;
