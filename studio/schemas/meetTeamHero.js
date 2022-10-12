export default {
  name: "teamHero",
  title: "Meet The Team Hero",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Image", name: "image", type: "image" },
    { title: "Text", name: "text", type: "string" },
    {
      title: "Contact Button", name: "contactButton", type: "reference",
      to: [{ type: "homepageLink" }],
    }
  ],
}