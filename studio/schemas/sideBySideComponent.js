export default {
  name: "sideBySideComponent",
  title: "Image and Text Component",
  description: 'A component that can be used in the homepage, neighborhoods, team mebers page with an image with a title and description next to it. Can justify left or right to stagger, or keep images on one side',
  type: "document",
  fields: [
    { title: "Image", name: "image", type: "image" },
    { title: "Description of Image", name: "alt", type: "string" },
    { title: "Heading", name: "heading", type: "string" },
    { title: "Description", name: "description", type: "text" },

  ],
}
