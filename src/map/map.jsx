import React, { useState } from 'react';
import './map.css'

export default function Map() {
    return (
        <div className="flex items-center justify-center h-screen relative">
            <Sidebar />
            <div className="flex flex-col ml-16 h-full"> {/* Adjust margin to account for the sidebar */}
                <h1 className="text-4xl font-bold text-black">Map Component</h1>
            </div>
        </div>
    );
}
const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <button onClick={toggleSidebar}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </button>
            {isExpanded && (
                <div className="sidebar-content">
                    <h2>Sidebar Content</h2>
                    <p>Some content here...</p>
                </div>
            )}
        </div>
    );
};