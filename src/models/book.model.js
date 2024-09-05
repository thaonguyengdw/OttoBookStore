'use strict'

const { model, Schema } = require('mongoose')

const DOCUMENT_NAME = 'Book'

const COLLECTION_NAME = 'Books'

const bookSchema = new Schema({
    title: { type: String, required: true },
    isbn: { 
        type: String, 
        required: true, 
        unique: true, 
        match:  /^97[89]\d{9}(\d|X)$/,  // ISBN-13 validation },
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be at least 0'],
        max: [1000, 'Price must be at most 1000'],
    },
    author: { type: String, required: true },
    category: { 
        type: Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true 
      },
    review: { type: String },
    discount: { type: Number, default: 0 },  // New discount field in latest schema version
    version: { type: Number, default: 1 }    // Schema version
},{
    collection: COLLECTION_NAME,
    timestamps: true,
})

module.exports = model(DOCUMENT_NAME, bookSchema)
