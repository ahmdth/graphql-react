import { gql } from "@apollo/client"; 

export const getBooksQuery = gql`
query Books{
  books {
    id
    name
    genre
  }
}`;

export const getBookQuery = gql`
query Book($id: ID!){
  book(id: $id) {
    id
    name
    genre
    author {
      name
      age
    }
  }
}`;

export const getAuthorsQuery = gql`
query GetAuthors {
  authors{
    id
    name
  }
}`;

export const addBookMutaion = gql`
mutation($name: String!, $genre: String!, $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId){
    id
    name
  }
}
`