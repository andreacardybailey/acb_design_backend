const db = require("../db/db");

class ProductsDAO {
  getProducts(){
    return db("products")
      .select("*")
      .then(rows => rows);
  };
  async createProduct(name, price, image, category, description){
    const [id] = await db("products")
      .insert({
        name,
        price,
        image,
        category,
        description
      })
      .returning("id");
    return id;
  };
}

module.exports = new ProductsDAO;