import React, { useState, useEffect } from 'react';
import Tab from './Tab';
import './Sidebar.css';

const SidebarContent = [
    { id: 1, name: 'Model 3', text: 'model-3-tab' },
    { id: 2, name: 'Safety', text: 'safety-tab' }
]

const Sidebar = () => {

    useEffect(() => {
        document.body.onkeyup = function(e) {
            switch (e.keyCode) {
                case 38://arrowup
                    window.scrollTo(
                        {
                            top: 0,
                            behavior: 'smooth'
                        }
                    )
                    
                break;

                case 40://arrowdown
                
                    window.scrollTo(
                        {
                            top: 800,
                            behavior: 'smooth'
                        }
                    )

                    setActiveTab(2)
                break;
            
                default:
                    break;
            }
        }
        // ('keydown', function(e) {
            
        // })
    })

    const [selectedTabId, setSelectedTabId] = useState(1);

    function isActive (id) {
        return selectedTabId === id;
    }

   function setActiveTab (selectedTabId) {
        setSelectedTabId(selectedTabId);
        switch (selectedTabId) {
            case 1:
                window.location.replace('#model-3');
                break;
            case 2:
                window.location.replace('#safety');
                break;
            default:
                break;
        }
        
    }

    const tabs = SidebarContent.map((item, i) => (
        <Tab key={i}
            content={item.name}
            isActive={()=>isActive(item.id)}
            onActiveTab={()=>setActiveTab(item.id)}
            text={item.text}
        />
    ))
    return (
        <ul className="side-nav-container">
            {tabs}
        </ul>
    )
}

export default Sidebar