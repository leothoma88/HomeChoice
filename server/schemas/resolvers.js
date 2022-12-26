const { Home } = require("../models");

const resolvers = {
  Query: {
    homes: async () => {
      return await Home.find().sort({ createdAt: -1 })
    }
  }
};

module.exports = resolvers;
