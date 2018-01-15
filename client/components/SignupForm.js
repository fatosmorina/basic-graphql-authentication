import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/Signup';

class SignupForm extends Component {
    constructor(props){
        super(props);

        this.state = { errors: [] };
    }
    onSubmit({ email, password }){
        this.props.mutate({
            variables: { email, password }
        }).catch(result => {
            const errors = result.graphQLErrors.messages;
            this.setState({ errors });
        });
    }

    render(){
        return(
            <div>
                <h3> Sign up</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} errors={[]} />
            </div>
        )
    }
}

export default graphql(mutation)(SignupForm);