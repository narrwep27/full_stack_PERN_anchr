import { useState } from "react";

const HistorySession = ({ session, allTags }) => {
    const [editDisplay, setEditDisplay] = useState('history-content-edit-display-hide');
    const [newTag, setNewTag] = useState('');

    const toggleDisplay = () => {
        editDisplay === 'history-content-edit-display-hide' ? 
            setEditDisplay('history-content-edit-display-show')
            : setEditDisplay('history-content-edit-display-hide');
    };
    const handleCancel = (e) => {
        e.preventDefault()
        setNewTag('');
        setEditDisplay('history-content-edit-display-hide');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                <div className="history-content-delete"><button>Delete</button></div>
                <div className={editDisplay}>
                    <form onSubmit={handleSubmit}>
                        <select onChange={(e) => setNewTag(e.target.value)} value=''>
                            <option value=''>-Select new tag-</option>
                            {allTags.map((index) => (
                                <option key={index.id} value={index.id}>{index.description}</option>
                            ))}
                        </select>
                        <input type='number' value={session.timeSpent} />
                        <button type="submit">Submit Changes</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default HistorySession;