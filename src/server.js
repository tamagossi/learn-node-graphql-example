const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        description: String,
        price: Float
    }
`);

const app = express();
const PORT = 3000;

const rootValue = {
	description: 'Blue shoe',
	price: 12.12,
};

app.use(
	graphqlHTTP({
		schema,
		rootValue,
	})
);

app.listen(PORT, () => {
	console.log(`-- ✅ app and running on port ${PORT} --`);
});
