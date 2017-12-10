import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends Component {
    renderButtons(){
        const { loading, user } = this.props.data;

        if (loading) { return <div />; }


    
    }

    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    {this.renderButtons()}
                </div>
            </nav>
        );
    }
}

export default graphql(query)(Header);