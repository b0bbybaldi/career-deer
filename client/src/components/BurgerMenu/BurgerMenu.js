import React from 'react';
import ReduxBurgerMenu from './Menu';
import { Link } from "react-router-dom";
import './BurgerMenu.css';

import { connect } from 'react-redux';
import { logout } from './actions';

class BurgerMenu extends React.Component {
    logout () {
        this.props.logout()
    }

    render () {
        return (
            <ReduxBurgerMenu>
                <img width="50px" className="text-center my-3" src="/imgs/logo-white.svg" alt="menu logo"/>

                <h3>Hello [USERNAME]!</h3>
                <a
                href="/"
                className="menu-item">
                Home
                </a>
                <Link 
                to="/addjob"
                className="menu-item">
                Add a Job
                </Link>
                <Link 
                to="/search"
                className="menu-item">
                Search for Jobs</Link>
                <Link
                to="/viewjobs" 
                className="menu-item">
                Tracked Jobs
                </Link>
                <Link 
                to="/board"
                className="menu-item">
                Tracker Board
                </Link>
                <Link 
                to="/chart"
                className="menu-item">
                View Charts
                </Link>
                <br/>
                <Link
                to="/" 
                className="menu-item"
                onClick={this.logout}>
                Logout
                </Link>

            </ReduxBurgerMenu>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app,
  });
  
  
  // We don't have to use BindActionCreators because this is a smart component
const mapActionsToProps = (dispatch, props) => ({
    logout
})

export default connect(mapStateToProps,mapActionsToProps())(BurgerMenu);