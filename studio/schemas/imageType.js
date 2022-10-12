export default {
  title: "Images with Alt Text",
  name: "imageType",
  type: "image",
  fields: [
    {
      title: "Alternative Text",
      name: "alt",
      type: "string",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
}
