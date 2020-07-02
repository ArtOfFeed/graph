const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLBoolean} = graphql;

const Movies = require('../models/movie');

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new graphql.GraphQLNonNull(GraphQLString)},
        genre: {type: new graphql.GraphQLNonNull(GraphQLString)},
        watched: {type: new graphql.GraphQLNonNull(GraphQLBoolean)},
        rate: {type: GraphQLInt}
    }),
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMovie: {
            type: MovieType,
            args: {
                name: {type: new graphql.GraphQLNonNull(GraphQLString)},
                genre: {type: new graphql.GraphQLNonNull(GraphQLString)},
                watched: {type: new graphql.GraphQLNonNull(GraphQLBoolean)},
                rate: {type: GraphQLInt},
            },
            resolve(parent, {name, genre, watched, rate}) {
                const movie = new Movies({
                    name,
                    genre,
                    watched,
                    rate,
                });
                return movie.save();
            },
        },
        deleteMovie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Movies.findByIdAndRemove(id);
            }
        },
        updateMovie: {
            type: MovieType,
            args: {
                id: {type: GraphQLID},
                name: {type: new graphql.GraphQLNonNull(GraphQLString)},
                genre: {type: new graphql.GraphQLNonNull(GraphQLString)},
                watched: {type: new graphql.GraphQLNonNull(GraphQLBoolean)},
                rate: {type: GraphQLInt},
            },
            resolve(parent, {id, name, genre, watched, rate}) {
                return Movies.findByIdAndUpdate(
                    id,
                    {$set: {name, genre, watched, rate}},
                    {new: true},
                );
            },
        },
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Movies.findById(id);
            },
        },
        movies: {
            type: new graphql.GraphQLList(MovieType),
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, {name}) {
                return Movies.find({name: {$regex: name, $options: "i"}});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
