import { useState } from "react";
import { UpdateSession, DestroySession } from "../services/Session";

const HistorySession = ({ session, allTags, getSessions }) => {
    const [editDisplay, setEditDisplay] = useState('history-content-edit-display-hide');
    const [newTagId, setNewTagId] = useState('');
    const [newTime, setNewTime] = useState('');

    const toggleDisplay = () => {
        editDisplay === 'history-content-edit-display-hide' ? 
            setEditDisplay('history-content-edit-display-show')
            : setEditDisplay('history-content-edit-display-hide');
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setNewTagId('');
        setNewTime('');
        setEditDisplay('history-content-edit-display-hide');
    };
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        let time = session.timeSpent;
        let tag = session.tag_id;
        if (newTime) { time = newTime };
        if (newTagId) { tag = newTagId };
        let newSession = await UpdateSession(session.id, time, tag);
        setNewTagId('');
        setNewTime('');
        setEditDisplay('history-content-edit-display-hide');
        getSessions();
    };
    const handleDelete = async () => {
        let deleted = await DestroySession(session.id);
        getSessions();
    };
    
    return (
        <div className="history-session-row">
            <div key={session.id} className="history-session-content">
                <div className="history-content-date">{session.date}</div>
                <div className="history-content-tag">{session.Tag.description}</div>
                <div className="history-content-timeSpent">{session.timeSpent}</div>
                <div className="history-content-edit">
                    <button onClick={toggleDisplay}>Edit</button>
                </div>
                <div className="history-content-delete"><button onClick={handleDelete}>Delete</button></div>
                <div className={editDisplay}>
                    <form onSubmit={handleEditSubmit}>
                        <label>New Tag: </label>
                        <select onChange={(e) => setNewTagId(e.target.value)} value={newTagId}>
                            <option value=''>-Select new tag-</option>
                            {allTags.map((index) => (
                                <option key={index.id} value={index.id}>{index.description}</option>
                            ))}
                        </select>
                        <label>New Time: </label>
                        <input 
                            type='number' 
                            onChange={(e) => {setNewTime(e.target.value)}}
                            value={newTime} 
                            placeholder={session.timeSpent}
                        />
                        <button type="submit">Submit Changes</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default HistorySession;