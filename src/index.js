import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './logo.svg';    
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import SlideS from './components/SlideS/SlideS'


class Mystructure extends React.Component{
    state = {
        sideDrawerOpen: false          
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });

    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };
    render(){
        let backDrop;
        if (this.state.sideDrawerOpen){
            backDrop=<BackDrop click={this.backdropClickHandler} />
        }
        return(
            <div className="parent">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                <SideDrawer show={this.state.sideDrawerOpen} />  
                {backDrop}
                <section className="content">
                    <h1>Hello React!</h1>
                    <SlideS /> 
                </section>
                <footer>
                    
                </footer>           
            </div>
        );     
    }
}

ReactDOM.render(<Mystructure />, document.getElementById('root'));