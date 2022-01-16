import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import './App.css';
import Nav from './component/Nav'
import UserHome from './pages/UserHome'

export default function App () {

	const [userAuth, setUserAuth] = useState(false)

	return (
		<div className='App'>
			{userAuth ? <p>authed</p> : <p>Not authed</p>}
			<Nav />
			<main>
				<Route exact path="/home" component={UserHome} />
				<Route exact path='/SignUp' component={SignUp} />
				<Route exact path='/About' component={About} />
			</main>
		</div>
	);
}
