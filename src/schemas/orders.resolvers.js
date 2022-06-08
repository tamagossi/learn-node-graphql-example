const { getAllOrders } = require('../models/orders.model');

module.exports = {
	Query: {
		orders: async (parent) => {
			return await getAllOrders();
		},
	},
};
