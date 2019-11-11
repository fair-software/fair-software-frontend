/* Import faunaDB sdk */
const faunadb = require('faunadb')

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
})

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
    /* parse the string body into a useable JS object */
    try {
        const data = JSON.parse(event.body);


        const errors = {};

        for (let key of ['firstname', 'lastname', 'email']) {
            if (!data[key]) {
                errors[key] = 'Field is required';
            }
        }

        if (Object.keys(errors).length > 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({errors}),
            }
        }

        const newItem = {
            data: {
                firstname: data['firstname'],
                lastname: data['lastname'],
                email: data['email'],
            }
        }
        /* construct the fauna query */
        return client.query(q.Create(q.Ref('classes/endorsements'), newItem))
            .then((response) => {
                return {
                    statusCode: 200,
                    body: JSON.stringify({})
                }
            }).catch((error) => {
                return {
                    statusCode: 400,
                    body: JSON.stringify({error: error.toString()})
                }
            })
    } catch(e) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: e.toString() })
        }
    }
}