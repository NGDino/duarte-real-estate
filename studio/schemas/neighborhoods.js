export default {
    name: "neighborhoods",
    title: "Neighborhoods",
    type: "document",
    fields: [
      { title: "Heading", name: "heading", type: "string" },
      { title: "Kicker", name: "kicker", type: "string" },
      { title: "Subhead", name: "subhead", type: "string" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "neighborhood" }],
          },
        ],
      },
    ],
  }
  