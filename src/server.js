const express = require('express');
const path = require('path');

const { ApolloServer } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const resolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));
const typeDefs = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const PORT = 3000;

async function startApolloServer() {
	const app = express();

	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
	});

	const server = new ApolloServer({
		schema,
	});

	await server.start();
	server.applyMiddleware({ app, path: '/graphql' });

	app.listen(PORT, () => {
		console.log(`-- ✅ app and running on port ${PORT} --`);
	});
}

startApolloServer();
