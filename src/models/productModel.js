import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/DBconfig.js";

class ProductModel extends Sequelize.Model {}

ProductModel.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    productCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProductModel",
    tableName: "products",
    timestamps: false,
  }
);

export default ProductModel;
