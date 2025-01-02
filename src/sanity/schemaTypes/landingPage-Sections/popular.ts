export default {
    title: "Popular",
    name: "popular",
    type: "object",
    fields: [
      {
        title: "Popular Section Heading",
        name: "popularSectionHeading",
        type: "string",
      },
      {
        title: "Popular Section Button",
        name: "popularSectionButton",
        type: "string",
      },
      {
        title: "Popular Cards",
        name: "popularCards",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                title: "Popular Section Image",
                name: "popularSecImage",
                type: "image",
              },
              {
                title: "Popular Section Heading",
                name: "popularSecHeading",
                type: "string",
              },
              {
                title: "Popular Section Price",
                name: "popularSecPrice",
                type: "number",
              },
            ],
          },
        ],
      },
    ],
  };