import React, { useState } from 'react';
import { AddTag } from '../services/Tag';

export default function StartSession(props) {
	const [tagInput, setTagInput] = useState(true);
	const [selectorValue, setSelectorValue] = useState(null);
	const handleSession = (e) => {
		e.preventDefault();
		props.setSession(false);
		props.setStart(true);
	};
	const postNewTag = async (e) => {
		e.preventDefault();
		await AddTag(props.newTag);
		props.getTags();
		setSelectorValue(null);
	};
	const tagDropdownHandler = (e) => {
		if (e.target.id == 'newTag') {
			setTagInput(true);
		} else {
			setTagInput(false);
			props.setSessionObject({ ...props.sessionObject, tagId: e.target.value });
		}
	};
	return (
		<div className='StartSession'>
			<form onSubmit={handleSession}>
				<select
					form='timerform'
					className='start-session-tags-dropdown'
					id='tagDropDown'
					onChange={tagDropdownHandler}
					value={selectorValue}
					required>
					<option value='' id='newTag'>
						Add new tag...
					</option>
					{props.userTags.map((e, i) => (
						<option key={i} value={e.id}>
							{e.description}
						</option>
					))}
				</select>
			</form>
			{tagInput ? (
				<form onSubmit={postNewTag}>
					<input
						value={selectorValue}
						name='description'
						className='start-session-minutes-form'
						onChange={props.tagChange}
						placeholder='Enter tag name...'></input>

					<button type='submit' className='start-session-add-tag-btn'>
						Add
					</button>
				</form>
			) : (
				<div></div>
			)}
			{tagInput ? (
				<div></div>
			) : (
				<form onSubmit={handleSession} id='timerform'>
					<input
						type='number'
						name='timeSpent'
						className='start-session-minutes-form'
						onChange={props.handleChange}
						placeholder='Enter session time in minutes'></input>
					<br />
					<button type='submit' className='start-session-btn'>
						Start Session
					</button>
				</form>
			)}
		</div>
	);
}
