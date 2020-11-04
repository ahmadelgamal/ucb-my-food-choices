// import all models
const Profile = require("./Profile");
const User = require("./User");
const Restriction = require("./Restriction");

User.hasMany(Profile, {
  foreignKey: "user_id",
});

Profile.belongsTo(User, {
  foreignKey: "user_id",
});

Restriction.belongsTo(User, {
  foreignKey: "restriction_id",
});

Restriction.belongsTo(Profile, {
  foreignKey: "restriction_id",
});

Profile.hasMany(Restriction, {
  foreignKey: "restriction_id",
});

module.exports = { User, Profile, Restriction };
