const products = [
	{ id: 'readshoe', description: 'Red Shoe', price: 42.12 },
	{ id: 'bluejean', description: 'Blue Jenas', price: 55.55 },
];

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
	products,
	getProductById,
	getProducts,
	getProductsByPrice,
};
