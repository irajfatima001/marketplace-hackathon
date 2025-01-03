 const main={
    title: "Main",
    name: "main",
    type: "object",
    fields: [
      { title: "Main Product Image", name: "mainImg", type: "image" },
      {
        title: "Product Cards",
        name: "productCards",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                title: "Product Card ID",
                name: "productCardId",
                type: "string",
                description: "A unique identifier for the product card",
              },
              {
                title: "Product Card Image",
                name: "productCardImage",
                type: "image",
              },
              {
                title: "Product Card Heading",
                name: "productCardHeading",
                type: "string",
              },
              {
                title: "Product Card Price",
                name: "productCardPrice",
                type: "number",
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text'
              },
              {
                name: 'dimensions',
                title: 'Dimensions',
                type: 'object',
                fields: [
                  { name: 'height', type: 'string', title: 'Height' },
                  { name: 'width', type: 'string', title: 'Width' },
                  { name: 'depth', type: 'string', title: 'Depth' }
                ]
              },
              {
                name: 'features',
                title: 'Features',
                type: 'array',
                of: [{ type: 'string' }]
              },
              
            ],
          },
        ],
      },
    ],
  };
  export default main