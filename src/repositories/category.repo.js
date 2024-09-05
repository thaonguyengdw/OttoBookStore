const Category = require('../models/category.model');

const createCategory = async (name) => {
  const category = new Category({ name });
  return await category.save();
};

const getAllCategories = async () => {
  return await Category.find();
};

const getCategoryById = async (id) => {
  return Category.findById(id);
}


module.exports = { createCategory, getAllCategories, getCategoryById };