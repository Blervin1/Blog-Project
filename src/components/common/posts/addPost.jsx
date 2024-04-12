import 'easymde/dist/easymde.min.css';
import React, { useCallback, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import './index.css';

export const AddPost = () => {
	const [fullTitle, setfullTitle] = useState('');
	const [title, setTitle] = useState('');

	const [text, setText] = useState('');
	const [fullText, setFullText] = useState('');

	const onChange = useCallback(value => {
		setFullText(value);
	}, []);

	const options = React.useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '400px',
			autofocus: true,
			placeholder: 'Введите текст...',
			status: false,
			autosave: {
				enabled: true,
				delay: 1000,
			},
		}),
		[]
	);

	return (
		<div className='container'>
			<div className='post__add'>
				<input
					className='post__input'
					type='text'
					placeholder='Заголовок статьи...'
					value={fullTitle}
					onChange={e => setfullTitle(e.target.value)}
				/>
				<input
					className='post__input'
					type='text'
					placeholder='Короткий заголовок...'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<input
					className='post__input'
					type='text'
					placeholder='Описание статьи'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<SimpleMDE
					className='editor'
					value={fullText}
					onChange={onChange}
					options={options}
				/>
				<div className='post__btn'>
					<button className='btn btn__addpost' type='button'>
						Опубликовать
					</button>
					<button className='btn btn__addpost' type='button'>
						Отмена
					</button>
				</div>
			</div>
		</div>
	);
};
