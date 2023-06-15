const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then((tagData) =>{
    res.json(tagData)
  })
  // find all tags--------
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findAll(req.body, {
    where: {
      id: req.params.id,
    }
   }).then((tagData) => {
    res.json(tagData);
   })
  // find a single tag by its `id`-----
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err)
  })
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then((delTag) => {
    res.json(delTag);
  })
  .catch((err) => {
    res.json(err)
  })
  // delete on tag by its `id` value
});

module.exports = router;
