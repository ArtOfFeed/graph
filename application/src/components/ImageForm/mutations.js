import { gql } from 'apollo-boost';

export const addImageMutation = gql`
    mutation addImage($name: String!, $description: String!, $color: String!, $text: String!, $position: String!, $image: String!) {
        addImage(name: $name, description: $description, color: $color, text: $text, position: $position, image: $image) {
            name
        }
    }
`;

export const updateImageMutation = gql`
    mutation updateImage($id: ID, $name: String!, $description: String!, $color: String!, $text: String!, $position: String!, $image: String!) {
        updateImage(id: $id, name: $name, description: $description, color: $color, text: $text, position: $position, image: $image) {
            name
        }
    }
`;
