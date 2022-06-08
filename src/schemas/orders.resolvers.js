const { getOrders } = require('../models/orders.model');

module.exports = {
	Query: {
		orders: async () => {
			return await getOrders();
		},
	},
};
