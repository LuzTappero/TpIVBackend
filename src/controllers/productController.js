import ProductModel from "../models/productModel.js"

class ProductsController{
    static async getAll(req,res,next){
        try{
            const products= await ProductModel.getAll()
            res.status(200).json(products)
        }catch(error){
            next(error)}
    }
    static async getById(req,res,next){
        try{
            const { id } = req.params
            const product = await ProductModel.getById(id)
            return res.status(200).json(product)
        }catch(error){
            next(error)}
    }
    static async getByName(req, res,next){
        try{
            const { productName} = req.params
            const productByName= await ProductModel.getByProductName(productName)
            res.status(200).json(productByName)
        }catch(error){
           next(error)}
    }
    static async create(req, res,next){
        try{
            const { productName, productCategory, productPrice }= req.body;
            await ProductModel.createProduct({
                productName, 
                productCategory, 
                productPrice
            })
            return res.status(201).json({message: 'Product created successfully'})
        }catch(error){
            next(error)}
        }
    static async delete(req,res,next){
        try {
            const { id }= req.params
            await ProductModel.delete(id)
            return res.status(200).json({ message: 'Product deleted successfully' })
        }catch (error) {
            next(error)}
    }
    static async update(req,res,next){
        try {
            const { id }= req.params
            const {productName, 
                productCategory, 
                productPrice} = req.body
            await ProductModel.updateProduct({id, newData: {productName, productCategory, productPrice}})
            res.status(200).json({ message: 'Product updated successfully'})
        }catch(error){
            next(error)}
    }
}
    

export default ProductsController