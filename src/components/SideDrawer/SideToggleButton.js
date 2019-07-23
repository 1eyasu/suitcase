import React from 'react';
import './SideToggleButton.css';


const drawerToggleButton = props => (
    <button className="tbutton" onClick={props.click}>
        <div className="tbutton_lines"/>
        <div className="tbutton_lines"/>
        <div className="tbutton_lines"/>
    </button>



);

export default drawerToggleButton;