// import all models
const User = require("./User");
const Restriction = require("./Restriction");
const Profile = require("./Restriction");

User.belongsTo(Profile, {
  foreignKey: "user_id",
});

Restriction.belongsTo(Profile, {
  foreignKey: 'restriction_id'
});

Profile.hasMany(User, {
  foreignKey: "user_id",
});

Profile.hasMany(Restriction, {
  foreignKey: "restriction_id",
});


module.exports = { User, Profile, Restriction };
