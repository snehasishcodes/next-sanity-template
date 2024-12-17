const exampleSchema = {
    title: 'Example Title', // Display name in Sanity Studio
    name: 'example', // Unique identifier for the schema
    type: 'document', // This is a top-level document
    fields: [
        {
            title: 'Your Name',
            name: 'name',
            type: 'string',
            description: 'Your full name',
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            description: 'Short description',
        },
        {
            title: 'Your ID',
            name: 'id',
            type: 'number',
            description: 'Unique ID Number',
        },
        {
            title: 'Category',
            name: 'category',
            type: 'string',
            options: {
                list: [
                    { title: 'Name1', value: 'value1' },
                    { title: 'Name2', value: 'value2' },
                ],
            },
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping
            },
            description: 'Upload an image of yourself',
        },
    ],
};

export default exampleSchema;