const db = require("../db-old/db");

class ContactsDAO {
  async createContact(firstName, lastName, email, phone){
    const [id] = await db("contacts")
      .insert({
        first_name: firstName,
        last_name: lastName, 
        email,
        phone
      })
      .returning("id");
    return id;
  };
}

module.exports = new ContactsDAO();