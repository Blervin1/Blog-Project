import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../../api/fake.api/user.api';

const PostDetails = () => {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			const postData = await getUserById(parseInt(id));
			setPost(postData);
		};
		fetchPost();
	}, [id]);

	return (
		<div className='post-details'>
			{post ? (
				<div className='container'>
					<div className='post'>
						<h1 className='post__title'>{post.fullTitle}</h1>
						<p className='post__text'>{post.fullText}</p>
						<p className='post__author'>Автор: {post.user}</p>
					</div>
				</div>
			) : (
				<p className='container loader'></p>
			)}
		</div>
	);
};

export default PostDetails;
