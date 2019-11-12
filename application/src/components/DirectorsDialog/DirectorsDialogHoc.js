import { deleteDirectorMutation } from './mutation';
import {compose} from 'recompose';
import {directorsQuery} from '../DirectorsTable/queries';
import {graphql} from 'react-apollo';

const withGraphQLDelete = graphql(deleteDirectorMutation, {
    props: ({ mutate }) => ({
        deleteDirector: id => mutate({
            variables: id,
            refetchQueries: [{
                query: directorsQuery,
                variables: {name: ''}
            }],
        }),
    })
})

export default compose(withGraphQLDelete);