// import all models
const Profile = require("./Profile");
const User = require("./User");
const Restriction = require("./Restriction");

User.belongsToMany(Restriction, {
  through: "profile",
  as: "restriction",
  foreignKey: "user_id",
});

Restriction.belongsToMany(User, {
  through: "profile",
  as: "user",
  foreignKey: "restriction_id",
});

module.exports = { User, Profile, Restriction };
