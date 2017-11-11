const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    unnecessaryField: { type: GraphQLId }
  }
});

module.exports = RootQueryType;
