const { model, Schema } = require('mongoose')

const DOCUMENT_NAME = 'Category'

const COLLECTION_NAME = 'Categories'

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true }
},{
    collection: COLLECTION_NAME,
    timestamps: true,
});

module.exports = model(DOCUMENT_NAME, categorySchema);