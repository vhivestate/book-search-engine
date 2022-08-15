// import the gql tagged template function
const { gql } = require('apollo-server-express');
const { User, Book } = require('../models');

// create our typeDefs
const typeDefs = gql`

    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String
        bookCount: Int
        savedBooks: [Book]
    }

    type savedBook {
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Auth {
        token: ID!,
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook (authors: [String], title: String, bookId: String, description:String, image: String, link: String): User

        removeBook (bookId: String!): User
    }

`;

module.exports = typeDefs;