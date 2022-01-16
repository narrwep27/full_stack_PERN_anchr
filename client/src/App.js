import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import './App.css';
import Nav from './component/Nav'
import UserHome from './pages/UserHome'

export default function App () {

	const [userAuth, setUserAuth] = useState(false)


	// Flipping userAuth on click, temporary button.
	const authClick = () => {
		if (userAuth) { setUserAuth(false) }
		else if (!userAuth) setUserAuth(true)
	}

	return (
		<div className='App'>
			{/* <button onClick={authClick}>UserAuth test</button> */}
			{userAuth ?
				<>
					<Nav authClick={authClick} />
					<main>
						<Route exact path="/" component={UserHome} />
						<Route exact path='/SignUp' component={SignUp} />
						<Route exact path='/About' component={About} />
					</main>
				</>
				: <SignUp authClick={authClick} />}

		</div>
	);
}
