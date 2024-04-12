import React from 'react';
import { Link } from 'react-router-dom';

const ListPosts = ({ title, text, author, id }) => {
	return (
		<ul className='posts__list'>
			<li className='posts__item'>
				<h2 className='posts__item-title'>{title}</h2>
				<p className='posts__item-text'>{text}</p>
				<Link to={`/author/${author}`} className='author'>
					{author}
				</Link>
				<Link to={`/post/${id}`} className='btn'>
					Открыть статью
				</Link>
			</li>
		</ul>
	);
};

export default ListPosts;
