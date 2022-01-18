import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn'
import './App.css';
import Nav from './component/Nav'
import UserHome from './pages/UserHome'
import History from './pages/History'
import { CheckSession } from "./services/Auth";
import { LoadUserSessions } from './services/Session';

export default function App () {

	const [user, setUser] = useState(null)
	const [auth, setAuth] = useState(false)
	const [sessions, setSessions] = useState([])

	const checkToken = async () => {
		const user = await CheckSession();
		setUser(user)
		setAuth(true)
	}

	const getSessions = async (id) => {
		const userSessions = await LoadUserSessions(id)
		setSessions(userSessions)
	}

	useEffect( async () => {
		const token = localStorage.getItem('token')
		if (token) {
			await checkToken()
		}
	}, [])
	// Dummy objects
	const optionArray = [{ session: "Running" }, { session: "Studying" }, { session: "Walking" }, { session: "Gaming" }];

	return (
		<div className='App'>
			{auth ?
				<>
					<Nav setAuth={setAuth} setUser={setUser} setSessions={setSessions} />
					<main>
						<Route exact path="/home" component={(props) => <UserHome optionArray={optionArray} />} />
						<Route exact path='/history' component={(props) => <History sessions={sessions} />} />
						<Route exact path='/About' component={About} />
					</main>
				</>
				:
				<>
					<Route exact path="/signup" component={SignUp} />
					<Route exact path='/' component={(props) => <LogIn {...props} setUser={setUser} setAuth={setAuth} getSessions={getSessions} />} />
				</>
			}
		</div >
	);
}
