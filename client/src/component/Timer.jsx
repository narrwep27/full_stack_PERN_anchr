import React from 'react';

export default function Timer(props) {
	const handleSession = () => {
		sessionInterrupt();
		props.setSession(true);
	};
	const sessionInterrupt = () => {
		let remainingTime = props.initTime - props.time;
		props.setSessionObject({
			...props.sessionObject,
			timeSpent: remainingTime,
		});
		props.setTime(0);
	};
	return (
		<div className='Timer'>
			<div className='timer-countdown'>
				Time Remaining: <br />
				<span className='time-remaining'>
					{props.hours} : {props.minutes} : {props.seconds}
				</span>
			</div>
			<button onClick={handleSession} className='timer-end-session-btn'>
				End Session Early
			</button>
		</div>
	);
}
