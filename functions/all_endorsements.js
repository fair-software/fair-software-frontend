/* Import faunaDB sdk */
const faunadb = require('faunadb');

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = async (event, context) => {
    try {
        const result = await client.query(q.Paginate(q.Match(q.Index('all_endorsements'))));
        const detailsQuery = result.data.map(r => q.Get(r));
        const detailsResult = await client.query(detailsQuery);
        return {
            statusCode: 200,
            body: JSON.stringify(detailsResult),
        }
    } catch(e) {
        return {
            statusCode: 500,
            body: JSON.stringify({error: e.toString()})
        }
    }
};
