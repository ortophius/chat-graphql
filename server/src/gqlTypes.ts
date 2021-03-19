import { gql } from 'apollo-server';

const schema = gql(`
  type User {
    login: String!
    displayName: String!
    password: String!
  }

  type Message {
    author: User!
    text: String!
    timestamp: String
  }

  type Error {
    message: String!
  }

  type Token {
    secret: String!
  }

  type Query {
    messages: [Message]
    users: [User]
    user(id: String!): User
  }

  union RegisterResult = Token | Error

  type Mutation {
    register(login: String!, displayName: String!, password: String!): RegisterResult
    login(login: String!, password: String!): RegisterResult
  }
`);

export default schema;