import React from 'react';
import classes from "./login.module.css";

import {Link} from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className={classes.login_holder}>
                <h1>Login Page</h1>
                
                    <input type="text" placeholder="Insert Name"></input>
                    
                    <input type="text" placeholder="Insert Password"></input>

                    
                    {/* To direct to dashboard */}
                    <button>
                        <Link to="/dashboard">Log In</Link>
                    </button>
               
            </div>
        )
    }
}

export default Login;
