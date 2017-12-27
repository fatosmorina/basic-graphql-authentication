import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props){
        super(props);

        this.state = { email: '', password: '' };
    }

    render(){
        return(
            <div className="row">
                <form className="col s4">
                  <div className="input-field">
                    
                  </div>
                </form>
            </div>
        );
    }

}

export default AuthForm;