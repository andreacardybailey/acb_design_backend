const db = require("../db-old/db");

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
      .returning("*")
      .then(rows => {
        return rows[0];
      });
    return id;
  };
}

module.exports = new ProductsDAO;