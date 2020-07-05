const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLBoolean} = graphql;

const Images = require('../models/movie');

const ImageType = new GraphQLObjectType({
    name: 'Image',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new graphql.GraphQLNonNull(GraphQLString)},
        description: {type: new graphql.GraphQLNonNull(GraphQLString)},
        color: {type: new graphql.GraphQLNonNull(GraphQLString)},
        text: {type: new graphql.GraphQLNonNull(GraphQLString)},
        position: {type: new graphql.GraphQLNonNull(GraphQLString)},
        image: {type: new graphql.GraphQLNonNull(GraphQLString)},
    }),
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addImage: {
            type: ImageType,
            args: {
                name: {type: new graphql.GraphQLNonNull(GraphQLString)},
                description: {type: new graphql.GraphQLNonNull(GraphQLString)},
                color: {type: new graphql.GraphQLNonNull(GraphQLString)},
                text: {type: new graphql.GraphQLNonNull(GraphQLString)},
                position: {type: new graphql.GraphQLNonNull(GraphQLString)},
                image: {type: new graphql.GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, {name, description, color, text, position, image}) {
                const img = new Images({
                    name,
                    description,
                    color,
                    text,
                    position,
                    image
                });
                return img.save();
            },
        },
        deleteImage: {
            type: ImageType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Images.findByIdAndRemove(id);
            }
        },
        updateImage: {
            type: ImageType,
            args: {
                id: {type: GraphQLID},
                name: {type: new graphql.GraphQLNonNull(GraphQLString)},
                description: {type: new graphql.GraphQLNonNull(GraphQLString)},
                color: {type: new graphql.GraphQLNonNull(GraphQLString)},
                text: {type: new graphql.GraphQLNonNull(GraphQLString)},
                position: {type: new graphql.GraphQLNonNull(GraphQLString)},
                image: {type: new graphql.GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, {id, name, description, color, text, position, image}) {
                return Images.findByIdAndUpdate(
                    id,
                    {$set: {name, description, color, text, position, image}},
                    {new: true},
                );
            },
        },
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        image: {
            type: ImageType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Images.findById(id);
            },
        },
        images: {
            type: new graphql.GraphQLList(ImageType),
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, {name}) {
                return Images.find({name: {$regex: name, $options: "i"}});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
