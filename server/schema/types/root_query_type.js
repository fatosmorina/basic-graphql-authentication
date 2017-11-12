const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    unnecessaryField: { type: GraphQLId }
  }
});

module.exports = RootQueryType;
