import React from 'react';
import FindStationTab from "./FindStationTab";
import StationsTab from "./StationsTab";
import './Sidebar.css';

const Sidebar = ({ isOpen, activeTab, onTabClick }) => {
  return (
    
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="tabs">
            <li
                className={`tab ${activeTab === 'findStation' ? 'active' : ''}`}
                onClick={() => onTabClick('findStation')}
            >
                Encontrar estación
            </li>
            <li
                className={`tab ${activeTab === 'stations' ? 'active' : ''}`}
                onClick={() => onTabClick('stations')}
            >
                Estaciones
            </li>
        </ul>

        {activeTab === 'findStation' && <FindStationTab />}
        {activeTab === 'stations' && <StationsTab />}
        
    </div>
  );
};
 

export default Sidebar;