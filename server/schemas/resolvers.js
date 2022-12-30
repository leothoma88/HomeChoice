const { Home } = require("../models");

const resolvers = {
  Query: {
    homes: async (parent, args) => {
      query = {
        area: args.area,
        size: args.size,
        bedroomsandBath: args.bedroomsandBath,
        stories: args.stories,
        styles: args.style,
      };
      return await Home.find(query);
    },
  },
};

module.exports = resolvers;
