import { deleteMovieMutation } from './mutation';
import {compose} from 'recompose';
import {moviesQuery} from '../MoviesTable/queries';
import {graphql} from 'react-apollo';

const withGraphQLDelete = graphql(deleteMovieMutation, {
    props: ({ mutate }) => ({
        deleteMovie: id => mutate({
            variables: id,
            refetchQueries: [{
                query: moviesQuery,
                variables: {name: ''}
            }],
        }),
    })
})

export default compose(withGraphQLDelete);