export default {
  title: "Ceramics",
  name: "ceramics",
  type: "object",
  fields: [
    {
      title: "Ceramic Section Heading",
      name: "ceramicSectionHeading",
      type: "string",
    },
    {
      title: "Ceramic Section Button",
      name: "ceramicSectionButton",
      type: "string",
    },
    {
      title: "Ceramic Cards",
      name: "ceramicCards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Ceramic Section Image",
              name: "ceramicSecImage",
              type: "image",
            },
            {
              title: "Ceramic Section Heading",
              name: "ceramicSecHeading",
              type: "string",
            },
            {
              title: "Ceramic Section Price",
              name: "ceramicSecPrice",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
};
