import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';

const client = new ApolloClient({
  dataIdFromObject: object => object.id
});

const Root = () => {
  return (
    <div>
      Auth Starter
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
