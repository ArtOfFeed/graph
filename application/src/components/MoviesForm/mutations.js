import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
  mutation addMovie($name: String!, $description: String!, $color: String!, $text: String!, $position: String!) {
    addMovie(name: $name, description: $description, color: $color, text: $text, position: $position) {
      name
    }
  }
`;

export const updateMovieMutation = gql`
  mutation updateMovie($id: ID, $name: String!, $description: String!, $color: String!, $text: String!, $position: String!) {
    updateMovie(id: $id, name: $name, description: $description, color: $color, text: $text, position: $position) {
      name
    }
  }
`;
