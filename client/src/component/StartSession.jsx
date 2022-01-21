import React, { useState } from 'react';
import { AddTag } from '../services/Tag';
import TagButton from './TagButton';
import toast from 'react-hot-toast';


export default function StartSession(props) {
	const [tagInput, setTagInput] = useState(false);
	const handleSession = (e) => {
		e.preventDefault();
		if (
			props.sessionObject.tagId !== '' &&
			props.sessionObject.timeSpent !== 0
		) {
			props.setSession(false);
			props.setStart(true);
			toast('Session started!', { style: { background: 'green', color: 'white', border: '1px solid green'} });
		}

	};
	const postNewTag = async (e) => {
		e.preventDefault();
		await AddTag(props.newTag);
		props.getTags();
		setTagInput(false);
		// setSelectorValue(null)
	};
	const tagDropdownHandler = (e) => {
		if (e.target.id == 'newTag') {
			setTagInput(true);
		} else {
			setTagInput(false);
			props.setSessionObject({
				...props.sessionObject,
				tagId: parseInt(e.target.id),
			});
		}
	};
	console.log(props.sessionObject);
	return (
		<div className='StartSession'>
			<div className='start-session-tag-btn-container'>
				<TagButton
					userTags={props.userTags}
					tagDropdownHandler={tagDropdownHandler}
					tagInput={tagInput}
					tagChange={props.tagChange}
					postNewTag={postNewTag}
					sessionObject={props.sessionObject}
				/>
			</div>

			<div className='start-session-btn-container'>
				<form onSubmit={handleSession} id='timerform'>
					<input
						type='number'
						className='start-session-minutes-form'
						name='timeSpent'
						onChange={props.handleChange}
						placeholder='Duration in Minutes'></input>
					<br />
					<button className='start-session-btn' type='submit'>
						Start Session
					</button>
				</form>
			</div>
		</div>
	);
}
