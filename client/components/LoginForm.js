import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = { errors: [] };
    }

    componentWillUpdate(nextProps){
        if (!this.props.data.user && nextProps.data.user){

        }
    }

    onSubmit({ email, password }){
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(result => {
            const errors = result.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        } );
    }

    render(){
        return(
            <div className="container">
             <h3>Login form</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
            </div>
        );
    }
}

export default graphql(query)( 
    graphql(mutation)(LoginForm)
);