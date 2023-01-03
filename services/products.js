const productsDAO = require("../data_access_obj/products");

class ProductsService {
  getProducts(){
    return productsDAO.getProducts();
  }
  createProduct(productData) {
    const {name, price, image, category, description} = productData;
    return productsDAO.createProduct(name, price, image, category, description);
  }
}

module.exports = new ProductsService();