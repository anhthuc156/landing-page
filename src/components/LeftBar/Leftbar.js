import React, { useState } from 'react';
import './Sidebar.css';

const SidebarContent = [
    { id: 1, name: 'tab-1', text: 'text-1' },
    { id: 2, name: 'tab-2', text: 'text-2' },
    { id: 3, name: 'tab-3', text: 'text-3' },
]

const Tab = (props) => {
    
    return (
        <li className="side-nav-item"
            onClick={ props.onActiveTab }>
            <div className={ props.isActive ? 'side-nav-item-selected side-nav-tab' : 'side-nav-tab'}></div>
            <div className="side-nav-label">{props.content}</div>
        </li>
    )
}

const Sidebar = () => {

    const [selectedTabId, setSelectedTabId] = useState(1);

    const isActive = (id) => {
        return selectedTabId === id;
    }

    const setActiveTab = (selectedTabId) => {
        setSelectedTabId(selectedTabId);
    }

    const tabs = LeftBarContent.map((item, i) => (
        <Tab key={i}
            content={item.name}
            isActive={() =>isActive(item.id)}
            onActiveTab={() =>setActiveTab(item.id)}
        />
    ))
    return (
        <ul className="side-nav-container">
            {tabs}
        </ul>
    )
}

export default Sidebar