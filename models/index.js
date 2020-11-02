// import all models
const User = require("./User");
const Restriction = require("./Restriction");

User.hasMany(Restriction, {
  foreignKey: "user_id",
});

Restriction.hasMany(User, {
  foreignKey: "user_id",
});

module.exports = { User, Restriction };
