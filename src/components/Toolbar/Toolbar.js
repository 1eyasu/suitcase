import React from 'react';
import './Toolbar.css';
import  SideToggleButton from '../SideDrawer/SideToggleButton';
const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar_navi">
            <div className="toolbar_tbutton">
                <SideToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="#">Logo</a></div>
            <div className="spacer"/>
            <div className="toolbar_items">
                <ul>
                    <li><a href="#">Introduccion</a></li>
                    <li><a href="#">Hoja de Vida</a></li>
                    <li><a href="#">Portafolio</a></li>
                </ul>
            </div>
        </nav>            

    </header>
);
export default toolbar;