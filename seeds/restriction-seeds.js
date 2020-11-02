const { Restriction } = require("../models");

const restrictiondata = [
  {
    restriction: "Eggs",
    category: "Allergies"
  },
  {
    Restriction: "Fish",
    category: "Allergies"
  },
  {
    Restriction: "Gluten",
    category: "Allergies"
  },
  {
    Restriction: "Peanuts",
    category: "Allergies"
  },
  {
    Restriction: "Shellfish",
    category: "Allergies"
  },
  {
    Restriction: "Soy",
    category: "Allergies"
  },
  {
    Restriction: "Tree Nuts",
    category: "Allergies"
  },
  {
    Restriction: "Wheat",
    category: "Allergies"
  },
  {
    Restriction: "Celiac Disease: Gluten Free",
    category: "Medical"
  },
  {
    Restriction: "Diabetes: Sugar Free",
    category: "Medical"
  },
  {
    Restriction: "Gout: High Vegetables & Low Meat",
    category: "Medical"
  },
  {
    Restriction: "Hypertension: Low Salt",
    category: "Medical"
  },
  {
    Restriction: "Lactose Intolerance: Dairy Free",
    category: "Medical"
  },
  {
    Restriction: "Buddhist: No Meat, Garlic, Onions",
    category: "Religious"
  },
  {
    Restriction: "Hindu: No Beef, Eggs",
    category: "Religious"
  },
  {
    Restriction: "Jewish: Kosher",
    category: "Religious"
  },
  {
    Restriction: "Alcohol Free",
    category: "Substance"
  },
  {
    Restriction: "Caffeine Free",
    category: "Substance"
  },
  {
    Restriction: "Atkins",
    category: "Weight Management"
  },
  {
    Restriction: "Keto",
    category: "Weight Management"
  },
  {
    Restriction: "Low Fat",
    category: "Weight Management"
  },
  {
    Restriction: "Paleo",
    category: "Weight Management"
  },
  {
    Restriction: "Pescetarian",
    category: "Other"
  },
  {
    Restriction: "Vegan",
    category: "Other"
  },
  {
    Restriction: "Vegetarian",
    category: "Other"
  }
];

const seedRestrictions = () => Restriction.bulkCreate(restrictiondata);

module.exports = seedRestrictions;
