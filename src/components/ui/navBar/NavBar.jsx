import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const toRotate = useMemo(() => ['Мыслей'], []);
	const period = 100;

	const tick = useCallback(() => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);
		if (isDeleting) {
			setDelta(prevDelta => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	}, [loopNum, toRotate, isDeleting, text, period]);

	useEffect(() => {
		const ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [tick, delta]);

	return (
		<>
			<div className='container'>
				<div className='navbar'>
					<div className='logo'>
						{'Остров '}
						<span className='wrap'>{'of Thoughts'}</span>
					</div>
					<nav>
						<ul className='menu'>
							<li className='menu__item'>
								<Link className='menu__item-link' to='/'>
									Главная
								</Link>
							</li>
							<li className='menu__item'>
								<Link className='menu__item-link' to='/posts'>
									Статьи
								</Link>
							</li>
							<li className='menu__item'>
								<Link className='menu__item-link' to='/login'>
									Вход
								</Link>
							</li>
							<li className='menu__item'>
								<Link className='menu__item-link' to='/register'>
									Регистрация
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default NavBar;
