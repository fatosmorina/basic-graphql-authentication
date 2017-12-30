import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';

class LoginForm extends Component {
    render(){
        return(
            <div className="container">
             <h3>Login form</h3>
                <AuthForm />
            </div>
        );
    }
}

export default LoginForm;