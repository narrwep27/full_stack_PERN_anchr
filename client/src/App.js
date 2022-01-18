import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import './App.css';
import Nav from './component/Nav';
import UserHome from './pages/UserHome';
import History from './pages/History';
import { CheckSession } from './services/Auth';
import { LoadUserSessions } from './services/Session';

export default function App() {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

	const checkToken = async () => {
		const user = await CheckSession();
		setUser(user)
		setAuth(true)
	}

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      {auth ? (
        <>
          <Nav setAuth={setAuth} setUser={setUser} />
          <main>
            <Route
              exact
              path="/home"
              component={(props) => <UserHome user_id={user.id} />}
            />
			<Route exact path='/history' component={(props) => <History user={user} />} />
            <Route exact path="/About" component={About} />
          </main>
        </>
      ) : (
        <>
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/"
            component={(props) => (
              <LogIn
                {...props}
                setUser={setUser}
                setAuth={setAuth}
              />
            )}
          />
        </>
      )}
    </div>
  );
}
