const products = [
	{ id: 'readshoe', description: 'Red Shoe', price: 42.12, review: [] },
	{ id: 'bluejean', description: 'Blue Jenas', price: 55.55, review: [] },
];

function addProduct(id, description, price) {
	const newProduct = {
		id,
		price,
		description,
		reviews: [],
	};

	product.push(newProduct);

	return newProduct;
}

function addReview(id, rating, comment) {
	const matchProduct = getProductById(id);

	if (matchProduct) {
		const newReview = {
			rating,
			comment,
		};

		matchProduct.reviews.push(newReview);
		return newReview;
	}
}

function getProductById(id) {
	return products.filter((product) => product.id === id);
}

function getProducts() {
	return products;
}

function getProductsByPrice(min, max) {
	products.filter((product) => {
		return product.price >= min && product.price <= max;
	});
}

module.exports = {
	addProduct,
	addReview,
	products,
	getProductById,
	getProducts,
	getProductsByPrice,
};
