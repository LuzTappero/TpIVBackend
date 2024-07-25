import {Sequelize, DataTypes, Model, where} from 'sequelize'
import sequelize from '../config/DBconfig.js'


class ProductModel extends Sequelize.Model{
    static async getAll(){
        try{
            const products = await ProductModel.findAll()
            return products
        }catch(error){
            console.error('Error getting all products', error.message)
            throw error}
    }
    static async getById(id){
        try{
            const product= await ProductModel.findByPk(id);
            if (!product) {
                throw new Error('Product not found');
            }
            return product
        }catch(error){
            console.error('Error getting product by id', error.message)
            throw error}
    }
    static async getByProductName(productName){
        try{
            const name= await ProductModel.findOne(
                { where: { productName }
            })
            return name
        }catch(error){
            console.error('Error getting product by name', error.message);
            throw error}
    }
    static async createProduct({productName, productCategory,productPrice}){
        try{
            const existingProductName = await ProductModel.getByProductName(productName)
                if (existingProductName){
                    throw new Error('That product name already exists')}
            const product = await ProductModel.create(
                {productName,
                productCategory,
                productPrice}
            )
            return {
                success: true, message:'Product created successfully', product}
        }catch(error){
            console.error('Error creating a new product:', error.message)
            throw error}
    }
    static async delete(id){
        try{
            const product= await ProductModel.getById(id)
            await product.destroy()
            return { success: true, message: 'Product deleted successfully'}
        }catch(error){
            console.error('Error deleting product:', error.message)
            throw error}
    }
    static async updateProduct({id,newData}){
        try{
            const product= await ProductModel.getById(id)
            await product.update({
                productName: newData.productName,
                productCategory: newData.productCategory,
                productPrice: newData.productPrice
            })
            return {
                success: true, message: 'Product updated successfully'}
        }catch(error){
            console.error('Error updating a product:', error.message)
            throw error}
    }
}
ProductModel.init({
    productId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productCategory: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productPrice: {
       type: DataTypes.DECIMAL(10,2),
       allowNull: false 
    }
},{
    sequelize,
    modelName: 'ProductModel', 
    tableName: 'products', 
    timestamps: false
})

export default  ProductModel
