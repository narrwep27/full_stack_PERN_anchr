import React, { useEffect, useState } from 'react';
import { GetTagByTagId } from '../services/Tag';

const TagButton = (props) => {
	const [openDrop, setOpenDrop] = useState(false);
	const [currentTag, setCurrentTag] = useState('');
	const [tagClicked, setTagClicked] = useState(false);
	let buttonDisplay = '';

	const getCurrentTag = async () => {
		const result = await GetTagByTagId(props.sessionObject.tagId);
		setCurrentTag(result.description);
		return result;
	};
	getCurrentTag();

	const displayTag = () => {
		let tag = props.sessionObject.tagId;
		if (tag === '') {
			buttonDisplay = 'Choose Tag';
		} else {
			buttonDisplay = `${currentTag}`;
		}
	};
	displayTag();

	return (
		<div className='tag-dropdown-container'>
			<button
				className='start-session-add-tag-btn'
				onClick={() => setOpenDrop((openDrop) => !openDrop)}>
				{buttonDisplay}
			</button>

			<div className='tag-dropdown-option-list'>
				{openDrop &&
					props.userTags.map((e, i) => (
						<div
							className='start-session-tags-dropdown'
							onClick={props.tagDropdownHandler}
							key={i}
							id={e.id}>
							{e.description}
						</div>
					))}
				{openDrop && (
					<div
						className='start-session-tags-dropdown'
						id='newTag'
						onClick={props.tagDropdownHandler}>
						New tag
					</div>
				)}
				{props.tagInput && (
					<form onSubmit={props.postNewTag}>
						<input
							className='tag-input-form'
							name='description'
							onChange={props.tagChange}
							placeholder='Enter tag name...'></input>
					</form>
				)}
			</div>
		</div>
	);
};

export default TagButton;
