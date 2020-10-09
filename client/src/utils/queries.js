import gql from 'graphql-tag';


export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
  }
`;