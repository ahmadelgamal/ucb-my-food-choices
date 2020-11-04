const router = require("express").Router();
const { User, Restriction, Profile } = require("../../models");

// GET all restrictions /api/restrictions
router.get("/", (req, res) => {
  console.log("=========GET=RESTRICTION========");
  Restriction.findAll({
    attributes: ["id", "restriction_name", "category", "created_at", "updated_at"],

    include: [
      {
        model: Profile,
        attributes: ["id"],
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

// GET a restriction by id /api/restrictions/1
router.get("/:id", (req, res) => {
  console.log("=========GET=RESTRICTION=ID=======");
  Restriction.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "restriction_name"],

    include: [
      {
        model: User,
        attributes: ["first_name"],
        include: {
          model: User,
          attributes: ["last_name"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbRestrictData) => {
      if (!dbRestrictData) {
        res.status(404).json({ message: "No restricton found with this id" });
        return;
      }
      res.json(dbRestrictData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST create a restriction /api/restrictions
router.post("/", (req, res) => {
  console.log("=========CREATE=RESTRICTION========");
  // expects {"restriction_name": "My restriction", "category": Allergies}
  Restriction.create({
    restriction: req.body.restriction,
    category: req.body.category,
  })
    .then((dbRestrictData) => res.json(dbRestrictData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a restriction by id /api/restrictions/1
router.put("/:id", (req, res) => {
  console.log("=========UPDATE=RESTRICTION========");
  Restriction.update(
    {
      restriction: req.body.restriction,
      category: req.body.category,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRestrictData) => {
      if (!dbRestrictData) {
        res.status(404).json({ message: "No restriction found with this id" });
        return;
      }
      res.json(dbRestrictData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a restriction by id /api/restrictions/1
router.delete("/:id", (req, res) => {
  console.log("=========DELETE=RESTRICTION========="); 
  console.log("id", req.params.id);
  Restriction.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRestrictData) => {
      if (!dbRestrictData) {
        res.status(404).json({ message: "No restriction found with this id" });
        return;
      }
      res.json(dbRestrictData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
