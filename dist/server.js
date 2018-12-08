"use strict";

var _graphqlYoga = require("graphql-yoga");

var _prismaClient = require("../prisma-client");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var typeDefs = "\n  type Query {\n    hello(name: String): String!\n  }\n";
var resolvers = {
  Query: {
    hello: function hello(_, _ref) {
      var name = _ref.name;
      return "Hello ".concat(name || 'World');
    }
  }
};
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: function context() {
    return {
      context: function context(req) {
        return _objectSpread({}, req, {
          db: _prismaClient.prisma
        });
      }
    };
  }
});
server.start(function () {
  return console.log('Server is running on localhost:4000');
});