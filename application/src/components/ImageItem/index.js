import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteImageMutation } from './mutations';
import {imagesQuery} from "../ImageList/queries";

const withGraphqlDelete = graphql(deleteImageMutation, {
  props: ({ mutate }) => ({
    deleteImage: id => mutate({
      variables: id,
      refetchQueries: [{
        query: imagesQuery,
        variables: { name: '' },
      }],
    }),
  }),
});

export default compose(withGraphqlDelete);
