import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addImageMutation, updateImageMutation } from './mutations';
import {imagesQuery} from "../ImageList/queries";

const withGraphQL = compose(
  graphql(addImageMutation, {
    props: ({ mutate }) => ({
      addImage: image => mutate({
        variables: image,
        refetchQueries: [{
          query: imagesQuery,
          variables: { name: '' },
        }],
      }),
    }),
  }),
  graphql(updateImageMutation, {
    props: ({ mutate }) => ({
      updateImage: image => mutate({
        variables: image,
        refetchQueries: [{
          query: imagesQuery,
          variables: { name: '' },
        }],
      }),
    }),
  }),
);

export default compose(withGraphQL);
