export default {
  name: "sideBySideList",
  title: "Image and text Component List",
  description: 'A list of components to display an image and a title with text next to it. ',
  type: "document",
  fields: [
    { title: "Text", name: "text", type: "string" },
    {
      title: "Image and Text Components",
      name: "sideBySideComponents",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sideBySideComponent" }],
        },
      ],
    },
  ],
}
