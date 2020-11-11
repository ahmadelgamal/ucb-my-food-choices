// import all models
const Profile = require("./Profile");
const User = require("./User");
const Restriction = require("./Restriction");
const Admin = require("./Admin");

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

Admin.hasMany(Profile, {
  foreignKey: "profile_id",
});

module.exports = { User, Profile, Restriction, Admin };
