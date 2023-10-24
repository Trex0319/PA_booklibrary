const express = require("express");
const router = express.Router();

// instruction: import the author model
const Author = require("../models/author");

// instruction: GET /: List all authors
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let filter = {};
    if (name) {
      if (name) {
        filter.name = name;
      }
    }
    res.status(200).send(await Author.find(filter));
  } catch (error) {
    res.status(400).send({ message: "Author not found" });
  }
});

// instruction: setup GET /:id: Get a specific author by its _id
router.get("/:id", async (req, res) => {
  try {
    const data = await Author.findOne({ _id: req.params.id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ message: "Author id not found" });
  }
});

// instruction: setup POST /: Add a new author
router.post("/", async (req, res) => {
  try {
    const newAuthor = new Author({
      name: req.body.name,
      biography: req.body.biography,
      dob: req.body.dob,
    });

    await newAuthor.save();
    res.status(200).send(newAuthor);
  } catch (error) {
    res.status(400).send({ message: error._message });
  }
});

// instruction: setup PUT /:id: Update a author by its _id
router.put("/:id", async (req, res) => {
  try {
    const author_id = req.params.id;

    const updatedAuthor = await Author.findByIdAndUpdate(author_id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(updatedAuthor);
  } catch (error) {
    res.status(400).send({ message: error._message });
  }
});

// instruction: setup DELETE /:id: Delete a author by its _id
router.delete("/:id", async (req, res) => {
  try {
    const author_id = req.params.id;
    const deleteAuthor = await Author.findByIdAndDelete(author_id);
    res.status(200).send(deleteAuthor);
  } catch (error) {
    res.status(400).send({ message: error._message });
  }
});

// instruction: export the router
module.exports = router;
