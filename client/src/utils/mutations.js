import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
mutation saveBook($authors: [String], $title: String, $bookId: String, $description:String, $image: String, $link: String){
    saveBook(authors: $authors, title: $title, bookId: $bookId, description: $description, image: $image, link: $link) {
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            removeBook {
                authors
                title
                bookId
                description
                image
                link
            }
        }
    }
`;