export default {
  name: "homepageHero",
  title: "Homepage Hero",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    { title: "Subhead", name: "subhead", type: "string" },
    {
      title: "image",
      name: "image",
      type: "imageType",
    },
    { title: "Text", name: "text", type: "string" },
    {
      title: "Contact Card",
      name: "contactCard",
      type: "reference",
      to: { type: "heroContactCard" },
    },
  ],
}
