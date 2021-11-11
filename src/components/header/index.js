import React from 'react';
import classes from './header.module.css';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div className={classes.header}>
                <Link to="/dashboard"><h1>Logo</h1></Link>
            </div>
        )
    }
}

export default Header;
