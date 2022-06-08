const { getProducts, getProductsByPrice, getProductById } = require('../models/products.model');

module.exports = {
	Query: {
		product: async (_, args) => {
			const { id } = args;

			return await getProductById(id);
		},
		products: async () => {
			return await getProducts();
		},
		productsByPrice: async (_, args) => {
			const { min, max } = args;

			return await getProductsByPrice(min, max);
		},
	},
};
