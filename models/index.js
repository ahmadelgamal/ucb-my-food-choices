// import all models
const User = require("./User");
const Restriction = require("./Restriction");

User.hasMany(Restriction, {
  foreignKey: "user_id",
});

Restriction.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Restriction };
