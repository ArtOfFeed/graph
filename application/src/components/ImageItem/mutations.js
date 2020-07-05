import { gql } from 'apollo-boost';

export const deleteImageMutation = gql`
    mutation deleteImage($id: ID) {
        deleteImage(id: $id) {
            id
        }
    }
`;
