const schema = {
    properties: {
        body: {
            type: 'string',
            minLength: 1,
            contentEncoding: 'base64',
            contentMediaType: 'image/jpeg'
        },
    },
    required: [ 'body' ],
};

export default schema;