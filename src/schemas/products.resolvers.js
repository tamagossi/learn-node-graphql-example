const { getAllProducts } = require('../models/products.model');

module.exports = {
	Query: {
		products: async (parent) => {
			return await getAllProducts();
		},
	},
};
