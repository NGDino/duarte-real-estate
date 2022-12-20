//meet the team
export default {
    name: "propertyManagmentPage",
    title: "Property Managment Page",
    type: "document",
    fields: [
      { title: "Title", name: "title", type: "string" },
      { title: "Description", name: "description", type: "string" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [
          {
            type: "reference",
            to: [
              { type: "neighborhoodsHero" },
              { type: "sideBySideList" },
              // { type: "homepageBenefitList" },
            ],
          },
        ],
      },
    ],
  }
  