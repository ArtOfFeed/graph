import { gql } from 'apollo-boost';

export const imagesQuery = gql`
    query imagesQuery($name: String) {
        images(name: $name) {
            id
            name
            description
            color
            text
            position
            image
        }
    }
`;
