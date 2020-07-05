import { graphql } from 'react-apollo';
import {imagesQuery} from "./queries";
import {compose} from "recompose";

const withGraphQL = graphql(imagesQuery, {
  options: ({ name = '' }) => ({
    variables: { name },
  }),
});

export default compose(withGraphQL);
