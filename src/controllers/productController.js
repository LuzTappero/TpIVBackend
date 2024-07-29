import ProductModel from "../models/productModel.js";

class ProductsController {
  static async getAll(req, res, next) {
    try {
      const products = await ProductModel.findAll();
      res.status(200).json({ message: "Get all products", products });
    } catch (error) {
      next(error);
    }
  }
  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Get products by Id ", product });
    } catch (error) {
      next(error);
    }
  }
  static async getByName(req, res, next) {
    try {
      const { productName } = req.params;
      const productByName = await ProductModel.findOne({
        where: { productName },
      });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(201).json({ message: "Get products by name ", productByName });
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    try {
      const { productName, productCategory, productPrice } = req.body;
      const product = await ProductModel.create({
        productName,
        productCategory,
        productPrice,
      });
      res
        .status(201)
        .json({ message: "Product created successfully", product });
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      await product.destroy();
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      const id = req.params.id;
      const { productName, productCategory, productPrice } = req.body;

      const product = await ProductModel.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      await product.update({ productName, productCategory, productPrice });
      res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}
export default ProductsController;
