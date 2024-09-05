const { SuccessResponse } = require("../core/success.response")
const { addCategory, getCategories } = require("../services/category.service")

class CategoryController {
    
    createCategory  = async( req, res, next ) => {
        new SuccessResponse({
            message: 'Add category successfully',
            metadata: await addCategory(req.body.name)
        }).send(res)
    }

    getCategories  = async( req, res, next ) => {

        new SuccessResponse({
            message: 'Get list of categories successful',
            metadata: await getCategories()
        }).send(res)
    }
}

module.exports = new CategoryController()