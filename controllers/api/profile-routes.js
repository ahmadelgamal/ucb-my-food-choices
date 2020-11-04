const router = require("express").Router();
const { User, Restriction, Profile } = require("../../models");

// GET all restrictions /api/profile
router.get("/", (req, res) => {
  console.log("====GET=profile====");
  Profile.findAll({
    attributes: ["id", "user_id", "restriction_id"],

    include: [
      {
        model: Restriction,
        attributes: ["restriction_name"],
        include: {
          model: User,
          attributes: ["first_name"],
        },
      },
      {
        model: User,
        attributes: ["last_name"],
      },
    ],
  })
    .then((dbRestrictData) => res.json(dbRestrictData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a restriction by id /api/profile/1
router.get("/:id", (req, res) => {
  console.log("====GET=ID=profile====");
  Profile.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "user_id", "restriction_id"],

    include: [
      {
        model: Restriction,
        attributes: ["restriction_name"],
        include: {
          model: User,
          attributes: ["first_name"],
        },
      },
      {
        model: User,
        attributes: ["last_name"],
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

// POST create a restriction /api/profile
router.post("/", (req, res) => {
  console.log("======POST=profile=====");
  // expects {"event_name": "My Party" ,"event_date": "2020-11-10" user_id: 1}
  Profile.create({
    user_id: req.body.user_id,
    restriction_id: req.body.restriction_id,
  })
    .then((dbProfileData) => res.json(dbProfileData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a restriction by id /api/profile/1
router.put("/:id", (req, res) => {
  console.log("=====UPDATE==profile=====");
  Profile.update(
    {
      user_id: req.body.user_id,
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

// DELETE a restriction by id /api/profile/1
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
