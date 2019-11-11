/* Import faunaDB sdk */
const faunadb = require('faunadb')

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
})

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
    return client.query(q.Count(q.Match(q.Index('all_endorsements'))))
        .then((response) => {
            return {
                statusCode: 200,
                body: JSON.stringify(response)
            }
        }).catch((error) => {
            return {
                statusCode: 400,
                body: JSON.stringify({error: error.toString()})
            }
        })
}