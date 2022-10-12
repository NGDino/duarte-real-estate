export default {
  name: "heroContactCard",
  title: "Hero Contact Card ",
  type: "document",
  description: "The Hero Contact card is the card on the side of the homepage.  Do not add more than one",
  fields: [
    { title: "Headshot", name: "headshot", type: "image" },
    { title: "Name", name: "name", type: "string" },
    { title: "License Number", name: "licenseNumber", type: "string" },
    { title: "Description", name: "description", type: "text" },
    {
      title: "Contact Button", name: "contactButton", type: "reference",
      to: [{ type: "homepageLink" }],
    }
  ],
}
