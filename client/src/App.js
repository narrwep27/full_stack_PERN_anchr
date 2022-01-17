import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn'
import './App.css';
import Nav from './component/Nav'
import UserHome from './pages/UserHome'
import History from './pages/History'

export default function App () {

	const [userAuth, setUserAuth] = useState(false)

	const user = {
		username: "",
		password: "",
		email: "",
	}


	// Flipping userAuth on click, temporary button.
	const authClick = () => {
		if (userAuth) { setUserAuth(false) }
		else if (!userAuth) setUserAuth(true)
	}

	// Dummy objects
	const optionArray = [{ session: "Running" }, { session: "Studying" }, { session: "Walking" }, { session: "Gaming" }];

	const historyArray = [
		{ session: "Running", time: "44:15" },
		{ session: "Walking", time: "1:15:15" },
		{ session: "Studying", time: "15:10" },
		{ session: "Reading", time: "45:00" },
		{ session: "Reading", time: "45:00" },
		{ session: "Reading", time: "45:00" },
		{ session: "Reading", time: "45:00" },
		{ session: "Reading", time: "45:00" },
		{ session: "Reading", time: "45:00" },
		{ session: "Reading", time: "45:00" },
		{ session: "Testing", time: "45:00" },
	];

	return (
		<div className='App'>
			{userAuth ?
				<>
					<Nav authClick={authClick} />
					<main>
						<Route exact path="/" component={(props) => <UserHome optionArray={optionArray} historyArray={historyArray} />} />
						<Route exact path='/history' component={(props) => <History historyArray={historyArray} />} />
						<Route exact path='/About' component={About} />
					</main>
				</>
				:
				<>
					<Route exact path="/signup" component={SignUp} />
					<Route exact path='/' component={(props) => <LogIn {...props} setUserAuth={setUserAuth} />} />
				</>
			}
		</div >
	);
}
