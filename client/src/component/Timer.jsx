import React, { useEffect, useState } from 'react';
import { GetTagByTagId } from '../services/Tag';
import toast from 'react-hot-toast'

export default function Timer(props) {
	const [currentTag, setCurrentTag] = useState('');
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
		toast('Session ended early...', { style: { background: 'red', color: 'white', border: '1px solid green'} });
	};
	useEffect(() => {
		const getCurrentTag = async () => {
			const result = await GetTagByTagId(props.sessionObject.tagId);
			setCurrentTag(result.description);
			return result;
		};
		getCurrentTag();
	}, []);

	return (
		<div className='Timer'>
			<div className='timer-countdown'>
				Now focusing on: <span className='timer-current-tag'>{currentTag}</span>{' '}
				<br />
				<br />
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
