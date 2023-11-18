import React, { useState } from 'react';
// This can be used for the Comments sections
function ToggleMenu() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
        <button onClick={toggleMenu}>Toggle Menu</button>
        {showMenu && (
            <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            </ul>
        )}
        </div>
    );
}


export default ToggleMenu