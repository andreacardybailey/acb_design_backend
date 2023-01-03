const productsService = require("../services/products");

class ProductsController {
  async getProducts(req, res){
    try {
      const id = await productsService.getProducts(req.body).then(products => {
        res.send(products);
      });
      // res.status(201).json(id);
    } 
    catch(err){
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }
  async createProduct(req, res){
    try {
      const id = await productsService.createProduct(req.body);
      res.status(201).json(id);
    } 
    catch(err){
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }
}

module.exports = new ProductsController();