const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    unnecessaryField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
