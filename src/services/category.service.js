const { getAllCategories, createCategory}  = require('../repositories/category.repo');

const addCategory = async (name) => {
  return await createCategory(name);
};

const getCategories = async () => {
  return await getAllCategories();
};

const getCategoryById = async () => {
  return await Category.findById(id);
}

module.exports = { addCategory, getCategories, getCategoryById };