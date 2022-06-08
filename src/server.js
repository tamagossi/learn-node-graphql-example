const express = require('express');
const path = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const resolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));
const typeDefs = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const app = express();
const PORT = 3000;

const rootValue = {
	products: require('./models/products.model'),
	orders: require('./models/orders.model'),
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
