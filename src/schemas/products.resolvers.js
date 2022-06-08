const {
	getProducts,
	getProductsByPrice,
	getProductById,
	addProduct,
	addReview,
} = require('../models/products.model');

module.exports = {
	Mutation: {
		addProduct: (_, args) => {
			const { id, description, price } = args;
			addProduct(id, description, price);
		},
		addReview: (_, args) => {
			const { id, rating, comment } = args;
			addReview(id, rating, comment);
		},
	},
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
