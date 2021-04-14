const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Allow cross-origin requests
app.use(cors())

mongoose.connect("mongodb+srv://aman:test123@gql-tutorial.v3axn.mongodb.net/gql-tutorial?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('Successfully connected to the database!');
})

app.use('/graphql', graphqlHTTP({
//    schema: schema
    schema,
    graphiql: true
}))

const PORT = 4000
app.listen(PORT, () => {
    console.log('Server running on port '+ PORT);
})