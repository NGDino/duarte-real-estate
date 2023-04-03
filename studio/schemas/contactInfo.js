export default {
    name: "contactInfo",
    title: "Contact info",
    description: 'Contact info for each employee as well as main business',
    type: "document",
    fields: [
      { title: "Name", name: "name", type: "string",validation: Rule => Rule.required().warning('Must enter Name') },
      { title: "Phone Number", name: "phone", description: "Please use format 8887776666", type: "string", validation: Rule => Rule.length(10).warning(`Must be 10 numbers`) },
      { title: "Email", name: "email", type: "string" ,validation: Rule => Rule.required().warning('Must enter Email')},
      {
        title: "Social Media Links",
        name: "socialLinks",
        description: 'Not Required, Pick up to 3',
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "socialLink" }],
          },
        ],
        validation: Rule => Rule.max(3)
      },
    ],
  }