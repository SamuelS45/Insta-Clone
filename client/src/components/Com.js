import React, { useState } from 'react';
import './com.css';
// make the comment item into components
function Com() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
        <button onClick={toggleMenu}>Toggle Menu</button>
        {showMenu && (
            <div className="comment-section">
            <div className="comment">
                <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="avatar"
                />
                <div className="comment-body">
                <p className="username">Username</p>
                <p className="text">Comment text goes here</p>
                </div>
            </div>
            <div className="comment">
                <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="avatar"
                />
                <div className="comment-body">
                <p className="username">Username</p>
                <p className="text">Comment text goes here</p>
                </div>
            </div>
            <div className="comment">
                <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="avatar"
                />
                <div className="comment-body">
                <p className="username">Username</p>
                <p className="text">Comment text goes here</p>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}


export default Com