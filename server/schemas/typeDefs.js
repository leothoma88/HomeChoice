const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Home {
    _id: ID
    name: String
    area: String
    size: Int
    price: Int
    bedroomsandBath: Int
    stories: String
    style: String
  }

    type Query {
      homes: [Home]!
  }
`;  

module.exports = typeDefs;
