const express = require('express');
const categoryController = require('../../controllers/category.controller');
const { authenticate } = require('../../middleware/authMiddleware')
const router = express.Router();


// Routes
router.post('/', authenticate, categoryController.createCategory);
router.get('/', authenticate, categoryController.getCategories);

module.exports = router;