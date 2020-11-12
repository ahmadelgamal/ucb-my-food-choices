const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Favorite, UserFav } = require("../../models");



// GET all  /api/userfav
router.get("/users", (req, res) => {
  console.log("====GET=userfav====");
  UserFav.findAll({
    attributes: [
      "id",
      "user_id",
      "favorite_id",
      [
        sequelize.literal(
          "(SELECT food_name FROM favorite WHERE favorite.id = userfav.favorite_id)"
        ),
        "food_name",
      ],
    ],

    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbFavoriteData) => res.json(dbFavoriteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET all favorites /api/userfav
router.get(`/user/:id`, (req, res) => {
  console.log("====GET=favorites=BY=user====");
  UserFav.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "user_id",
      "favorite_id",
      [
        sequelize.literal(
          "(SELECT food_name FROM favorite WHERE favorite.id = userfav.favorite_id)"
        ),
        "food_name",
      ],
    ],

    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbFavoriteData) => res.json(dbFavoriteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET all favorites /api/profiles

router.get("/", (req, res) => {
  
  console.log("====GET=userfav=BY=favorite====");
  
  UserFav.findAll({
    attributes: [
      "id",
      "user_id",
      "favorite_id",
      [
        sequelize.literal(
          "(SELECT * FROM favorite WHERE favorite.id = userfav.favorite_id)"
        ),
        "food_name",
      ]
    ]
  }).then((dbFavoriteData) => res.json(dbFavoriteData))
});

// GET a favorite by id /api/userfav/1
router.get("/:id", (req, res) => {
  console.log("====GET=ID=userfav====");
  UserFav.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "user_id", "favorite_id", [sequelize.literal(
      "(SELECT food_name FROM favorite WHERE favorite.id = userfav.favorite_id)"
    ),
      "food_name",
    ],],

    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbUserFavData) => {
      if (!dbUserFavData) {
        res.status(303).json({ message: "No favorite found with this id" });
        return;
      }
      res.json(dbFavoriteData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST create a favorite /api/userfav
router.post("/", (req, res) => {
  console.log("======POST=profile=====");
  // expects {"user_id": 1 ,"restriction_id": 8}
  UserFav.create({
    user_id: req.session.user_id,
    favorite_id: req.body.favorite_id,
  })
    .then((dbUserFavData) => res.json(dbUserFavData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a favorite by id /api/userfav/1
router.put("/:id", (req, res) => {
  console.log("=====UPDATE==userfav=====");
  UserFav.update(
    {
      user_id: req.session.user_id,
      favorite_id: req.body.favorite_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbUserFavData) => {
      if (!dbUserFavData) {
        res.status(404).json({ message: "No favorite found with this id" });
        return;
      }
      res.json(dbUserFavData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a favorite by id /api/profiles/1
router.delete("/:id", (req, res) => {
  console.log("=====DELETE==userfav=====");
  console.log("id", req.params.id);
  UserFav.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserFavData) => {
      if (!dbUserFavData) {
        res.status(404).json({ message: "No favorite found with this id" });
        return;
      }
      res.json(dbUserFavData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
