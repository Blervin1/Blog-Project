import React from 'react';
import './index.css';

const Header = () => {
	return (
		<>
			<div className='container header'>
				<h1 className='header-title'>
					Добро пожаловать <br />
					на наш блог!{' '}
				</h1>
				<p className='header-text'>
					Мы рады видеть вас здесь. Здесь вы найдете увлекательные статьи на
					самые разнообразные темы. От путешествий до науки, от культуры до
					технологий - мы стремимся поделиться с вами увлекательным контентом,
					который будет вас вдохновлять и заставлять задуматься.{' '}
				</p>
				<p className='header-text'>
					Присоединяйтесь к нашему сообществу и погрузитесь в мир знаний и
					размышлений
				</p>
			</div>
		</>
	);
};

export default Header;
