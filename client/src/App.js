import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import './App.css';
import Nav from './component/Nav';
import UserHome from './pages/UserHome';
import SignIn from './pages/SignIn';
import StartSession from './component/StartSession';
import Summary from './component/Summary';

export default function App() {
	const [userAuth, setUserAuth] = useState(false);

	// Flipping userAuth on click, temporary button.
	const authClick = () => {
		if (userAuth) {
			setUserAuth(false);
		} else if (!userAuth) setUserAuth(true);
	};

	return (
		<div className='App'>
			<Summary />
			{/* <button onClick={authClick}>UserAuth test</button> */}
			{userAuth ? (
				<>
					<Nav authClick={authClick} />
					<main>
						<Route exact path='/' component={UserHome} />
						<Route exact path='/SignUp' component={SignUp} />
						<Route exact path='/About' component={About} />
						<Route exact path='/SignIn' component={SignIn} />
					</main>
				</>
			) : (
				<SignUp authClick={authClick} />
			)}
		</div>
	);
}
