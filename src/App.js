import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/main.css';

import PostDetails from './components/common/posts/PostDetails';
import { AddPost } from './components/common/posts/addPost';
import AuthorWorks from './components/common/posts/authorWorks';
import Footer from './components/ui/footer/footer';
import NavBar from './components/ui/navBar/NavBar';
import HomePage from './layouts/HomePage';
import LoginPage from './layouts/LoginPage';
import PostsPage from './layouts/PostsPage';
import RegisterPage from './layouts/RegisterPage';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/register' component={RegisterPage} />
				<Route exact path='/posts' component={PostsPage} />
				<Route exact path='/AddPost' component={AddPost} />
				<Route path='/author/:authorId' component={AuthorWorks} />
				<Route path='/post/:id/' component={PostDetails} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
