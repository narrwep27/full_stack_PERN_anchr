import { useState } from 'react';
import { UpdateSession, DestroySession } from '../services/Session';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import { IconBase, IconContext } from 'react-icons/lib';
import toast from 'react-hot-toast'

const HistorySession = (
	{ session, allTags, getSessions, deleteNotify },
	props
) => {
	const [editDisplay, setEditDisplay] = useState(
		'history-content-edit-display-hide'
	);
	const [newTagId, setNewTagId] = useState('');
	const [newTime, setNewTime] = useState('');
	const timeInMinutes = Math.ceil((session.timeSpent / 60000) * 10) / 10;

	const toggleDisplay = () => {
		editDisplay === 'history-content-edit-display-hide'
			? setEditDisplay('history-content-edit-display-show')
			: setEditDisplay('history-content-edit-display-hide');
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setNewTagId('');
		setNewTime('');
		setEditDisplay('history-content-edit-display-hide');
		toast('No changes made', { style: { background: 'white', color: 'black', border: '1px solid green'} });
	};

	const handleEditSubmit = async (e) => {
		e.preventDefault();
		let time = session.timeSpent;
		let tag = session.tag_id;
		if (newTime) {
			time = newTime * 60000;
		}
		if (newTagId) {
			tag = newTagId;
		}
		let newSession = await UpdateSession(session.id, time, tag);
		setNewTagId('');
		setNewTime('');
		setEditDisplay('history-content-edit-display-hide');
		getSessions();
		toast('Changes successful', { style: { background: 'white', color: 'black', border: '1px solid green'} });
	};

	const handleDelete = async () => {
		let deleted = await DestroySession(session.id);
		getSessions();
	toast('Session Deleted', { style: { background: 'red', color: 'white' } });
	};

	return (
		<div className='history-session-row'>
			<div key={session.id} className='history-session-content'>
				<div className='history-content-date'>{session.date}</div>

				<div className='history-content-tag'>{session.Tag.description}</div>

				<div className='history-content-timeSpent'>
					{timeInMinutes + ' mins'}
				</div>

				<div className='history-content-edit'>
					{/* <IconContext.Provider value={{style: {color: }}} */}
					<button className='history-content-edit-btn'>
						<AiTwotoneEdit onClick={toggleDisplay} size={25} />
					</button>

					<button className='history-content-delete-btn'>
						<AiTwotoneDelete onClick={handleDelete} size={25} color='red' />
					</button>
					{/* </div>

				<div className='history-edit-new-tag-container'> */}
					<div className={editDisplay}>
						<form onSubmit={handleEditSubmit}>
							<label>
								<b>New Tag:</b>
							</label>
							<br />
							<select
								onChange={(e) => setNewTagId(e.target.value)}
								value={newTagId}
								className='history-edit-new-tag-dropdown'>
								<option value=''>Select new tag</option>
								{allTags.map((index) => (
									<option key={index.id} value={index.id}>
										{index.description}
									</option>
								))}
							</select>

							<br />
							<br />

							<label>
								<b>New Time:</b>
							</label>
							<input
								type='number'
								onChange={(e) => {
									setNewTime(e.target.value);
								}}
								value={newTime}
								placeholder={timeInMinutes + ' min'}
								className='history-edit-new-time-form'
							/>

							<button type='submit' className='history-edit-submit-btn'>
								Submit Changes
							</button>
							<br />
							<button
								onClick={handleCancel}
								className='history-edit-delete-btn'>
								Cancel
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HistorySession;
