import React from 'react'

const Tab = (props) => {
    return (
        <li className="side-nav-item" onClick={ props.onActiveTab } id={props.text}>
            <div className={ props.isActive() ? "side-nav-tab-selected side-nav-tab" : "side-nav-tab"}></div>
            <div className="side-nav-label">{props.content}</div>
        </li>
    )
}

export default Tab