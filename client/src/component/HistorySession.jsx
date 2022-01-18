import { useState } from "react";

const HistorySession = ({ session }) => {
    const [editDisplay, setEditDisplay] = useState('history-content-edit-display-hide');

    const toggleDisplay = () => {
        editDisplay === 'history-content-edit-display-hide' ? 
            setEditDisplay('history-content-edit-display-show')
            : setEditDisplay('history-content-edit-display-hide');
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
                    <form>
                        <select value=''>
                            <option value=''>-Select new tag-</option>
                        </select>
                        <input type='number' placeholder='New time' />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default HistorySession;