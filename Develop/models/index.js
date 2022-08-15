// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_product'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_tag'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'tag'
})

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
})
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
})
Product.hasMany(ProductTag, {
  foreignKey: 'tag_id'
})
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
