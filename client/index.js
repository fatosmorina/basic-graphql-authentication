import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

const client = new ApolloClient({
  dataIdFromObject: object => object.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Auth Starter</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
