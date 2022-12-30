const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Home {
    _id: ID
    name: String
    image: String
    area: String
    size: Int
    price: Int
    bedroomsandBath: Int
    stories: String
    style: String
  }

  type Query {
    homes(
      area: String
      size: Int
      bedroomsandBath: Int
      stories: String
      style: String
    ): [Home]
  }
`;

module.exports = typeDefs;
