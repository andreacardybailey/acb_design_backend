/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      "name": "Blue/Yellow Heart Box",
      "description": "A unique box with a heart closure.",
      "price": "10.00",
      "category": "box",
      "image": "blue-yellow-heart-box.jpg" 
  },
  {
      "name": "Pink/Beige Heart Box",
      "description": "A unique box with a heart closure.",
      "price": "10.00",
      "category": "box",
      "image": "pink-beige-heart-box.jpg" 
  },
  {
      "name": "Peace Box",
      "description": "A vibrant and colorful box to send peaceful vibes to the recipient.",
      "price": "8.00",
      "category": "box",
      "image": "peace-box.jpg" 
  },{
      "name": "\"Stand Out for Good\" Starry Box",
      "description": "A starry box with a \"Stand out for Good\" emblem.",
      "price": "8.00",
      "category": "box",
      "image": "starry-box.jpg" 
  },{
      "name": "Bejeweled Love Box",
      "description": "A bejeweled box with messages of love on each side.",
      "price": "8.00",
      "category": "box",
      "image": "bejeweled-love-box.jpg" 
  },{
      "name": "Hearts, Hearts, Hearts Envelope",
      "description": null,
      "price": "8.00",
      "category": "box",
      "image": "hearts-env.jpg" 
  },{
      "name": "Vintage Envelope",
      "description": null,
      "price": "8.00",
      "category": "envelope",
      "image": "vintage-env.jpg" 
  },{
      "name": "Blue Glitter Tri-fold Father's Day Card",
      "description": null,
      "price": "10.00",
      "category": "card",
      "image": "blue-fd-card.jpg" 
  },{
      "name": "Ocean Woman Envelope",
      "description": null,
      "price": "8.00",
      "category": "envelope",
      "image": "ocean-env.jpg" 
  }
  ]);
};
