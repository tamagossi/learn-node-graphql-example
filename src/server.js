const express = require('express');
const path = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const schema = makeExecutableSchema({
	typeDefs,
});

const app = express();
const PORT = 3000;

const rootValue = {
	products: require('./data/products.model'),
	orders: require('./data/orders.model'),
};

app.use(
	graphqlHTTP({
		schema,
		graphiql: true,
		rootValue,
	})
);

app.listen(PORT, () => {
	console.log(`-- ✅ app and running on port ${PORT} --`);
});
