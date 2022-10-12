export default {
  name: "servicesList",
  title: "Services Cards List",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    { title: "Text", name: "text", type: "text" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "serviceCard" }],
        },
      ],
    },
  ],
}
