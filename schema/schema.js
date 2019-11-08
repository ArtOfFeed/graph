const graphql = require('graphql');
const Movies = require('../models/movie');
const Directors = require('../models/director');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean} = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        watched: {type: new GraphQLNonNull(GraphQLBoolean)},
        rate: {type: GraphQLInt},
        director: {
            type: DirectorType,
            resolve({directorId}, args) {
                return Directors.findById(directorId);
            }
        }
    })
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)},
        movies: {
            type: new GraphQLList(MovieType), 
            resolve({id}, args) {
                return Movies.find({directorId: id});
            }
        }
    })
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addDirector: {
            type: DirectorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, {name, age}) {
                const director = new Directors({
                    name,
                    age
                })
                return director.save();
            }
        },
        addMovie: {
            type: MovieType,
            args: {
                id: {type: GraphQLID},
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                watched: {type: new GraphQLNonNull(GraphQLBoolean)},
                rate: {type: GraphQLInt}
            },
            resolve(parent, {name, genre, watched, rate}) {
                const movie = new Movies({
                    name,
                    genre,
                    watched,
                    rate
                })
                return movie.save();
            }
        },
        deleteDirector: {
            type: DirectorType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return Directors.findByIdAndRemove(id);
            }
        },
        deleteMovie: {
            type: MovieType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return Movies.findByIdAndRemove(id);
            }
        },
        updateDirector: {
            type: DirectorType,
            args: {
                id: {type: GraphQLID},
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, {name, age}) {
                return Directors.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name,
                            age
                        }
                    },
                    {
                        new: true
                    }
                );
            }
        },
        updateMovie: {
            type: MovieType,
            args: {
                id: {type: GraphQLID},
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                watched: {type: new GraphQLNonNull(GraphQLBoolean)},
                rate: {type: GraphQLInt}
            },
            resolve(parent, {name, genre, watched, rate}) {
                return Movies.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name,
                            genre,
                            watched,
                            rate
                        }
                    },
                    {
                        new: true
                    }
                );
            }
        }
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return Movies.findById(id);
            },
        },
        director: {
            type: DirectorType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return Directors.findById(id);
            }
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve() {
                return Directors.find({});
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve() {
                return Movies.find({});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})