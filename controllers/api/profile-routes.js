const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Restriction, Profile } = require("../../models");

// GET all restrictions /api/profiles
router.get("/users", (req, res) => {
  console.log("====GET=profile====");
  Profile.findAll({
    attributes: [
      "id",
      "user_id",
      "restriction_id",
      [
        sequelize.literal(
          "(SELECT restriction_name FROM restriction WHERE restriction.id = profile.restriction_id)"
        ),
        "restriction_name",
      ],
    ],

    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbRestrictData) => res.json(dbRestrictData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET all restrictions /api/profiles
router.get("/user/:id", (req, res) => {
  console.log("====GET=profile=BY=USER====");
  Profile.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: [
      "id",
      "user_id",
      "restriction_id",
      [
        sequelize.literal(
          "(SELECT restriction_name FROM restriction WHERE restriction.id = profile.restriction_id)"
        ),
        "restriction_name",
      ],
    ],

    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbRestrictData) => res.json(dbRestrictData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a restriction by id /api/profiles/1
router.get("/:id", (req, res) => {
  console.log("====GET=ID=profile====");
  Profile.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "user_id", "restriction_id", [sequelize.literal(
      "(SELECT restriction_name FROM restriction WHERE restriction.id = profile.restriction_id)"
    ),
      "restriction_name",
    ],],

    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbProfileData) => {
      if (!dbProfileData) {
        res.status(404).json({ message: "No restricton found with this id" });
        return;
      }
      res.json(dbProfileData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST create a restriction /api/profiles
router.post("/", (req, res) => {
  console.log("======POST=profile=====");
  // expects {"user_id": 1 ,"restriction_id": 8}
  Profile.create({
    user_id: req.session.user_id,
    restriction_id: req.body.restriction_id,
  })
    .then((dbProfileData) => res.json(dbProfileData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a restriction by id /api/profiles/1
router.put("/:id", (req, res) => {
  console.log("=====UPDATE==profile=====");
  Profile.update(
    {
      user_id: req.session.user_id,
      restriction_id: req.body.restriction_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbProfileData) => {
      if (!dbProfileData) {
        res.status(404).json({ message: "No restriction found with this id" });
        return;
      }
      res.json(dbProfileData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a restriction by id /api/profiles/1
router.delete("/:id", (req, res) => {
  console.log("=====DELETE==profile=====");
  console.log("id", req.params.id);
  Profile.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProfileData) => {
      if (!dbProfileData) {
        res.status(404).json({ message: "No restriction found with this id" });
        return;
      }
      res.json(dbProfileData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
