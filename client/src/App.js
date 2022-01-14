import React from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import './App.css';

export default function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={SignUp} />
		</div>
	);
}
