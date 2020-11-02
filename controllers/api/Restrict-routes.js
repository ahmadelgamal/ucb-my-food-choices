const router = require("express").Router();
const {User, Restriction } = require("../../models");

// GET all restrictions /api/restrictions
router.get("/", (req, res) => {
  console.log("=========GET=========");
  Event.findAll({
    attributes: ["id", "event_name", "event_date"],

    include: [
      {
        model: Restriction,
        attributes: ["restriction"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
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
  console.log("========GET=ID========");
  Event.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "restriction", "user_id", "event_id"],

    include: [
      {
        model: Event,
        attributes: ["event_name", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
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
  console.log("=========POST=========");
  // expects {"event_name": "My Party" ,"event_date": "2020-11-10" user_id: 1}
  Event.create({
    restriction: req.body.restriction,
    event_id: req.body.event_id,
    user_id: req.body.user_id,
  })
    .then((dbRestrictData) => res.json(dbRestrictData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a restriction by id /api/restrictions/1
router.put("/:id", (req, res) => {
  console.log("=========PUT=========");
  Event.update(
    {
      event_name: req.body.event_name,
      event_date: req.body.event_date,
      user_id: req.body.user_id,
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
  console.log("=========DELETE========");
  console.log("id", req.params.id);
  Event.destroy({
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
