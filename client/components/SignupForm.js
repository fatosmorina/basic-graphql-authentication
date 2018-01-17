import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class SignupForm extends Component {
    constructor(props){
        super(props);

        this.state = { errors: [] };
    }

    componentWillUpdate(newProps){
        if (!this.props.data.user && nextProps.data.user){
            hashHistory.push('/dashboard')
        }
    }

    onSubmit({ email, password }){
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [ { query }]
        }).catch(result => {
            const errors = result.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });
    }

    render(){
        return(
            <div>
                <h3> Sign up</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
            </div>
        )
    }
}

export default graphql(query)(
    graphql(mutation)(SignupForm)
);