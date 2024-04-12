import React from 'react';
import './index.css';

const Footer = () => {
	return (
		<>
			<footer className='contacts'>
				<div className='container'>
					<div className='contacts-social'>
						<a
							rel='noreferrer'
							href='https://www.linkedin.com/in/denis-romanchenko-81a4a22a6/'
						>
							<svg
								className='icon'
								viewBox='0 0 32 32'
								width='48px'
								height='48px'
							>
								<path d='M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z' />
							</svg>
						</a>
						<a rel='noreferrer' href='https://t.me/blervin'>
							<svg
								className='icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 48 48'
								width='38px'
								height='38px'
							>
								<path
									d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z'
									fill='#ffffff66'
								/>
							</svg>
						</a>
					</div>
					<div className='contacts-footer'>
						<p>
							Like me on <br />
							LinkedIn
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
