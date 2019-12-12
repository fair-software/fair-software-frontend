/* Import faunaDB sdk */
const faunadb = require('faunadb');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

const sendMail = eventData => {
    const SMTP_HOST = 'smtp.sendgrid.net';
    const SMTP_PORT = 587;
    const SMTP_USER = 'apikey';
    const SMTP_PASSWORD = process.env.SENDGRID_API_KEY;

    const nmTransport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD
        }
    });

    const mailBody = `Dear ${eventData['firstname']},

Thank you for your endorsement!
Sincerely,

The fair-software.nl team.        
`;

    return nmTransport.sendMail({
        from: '"Fair software" fair-software@esciencecenter.nl',
        to: eventData['email'],
        subject: "Thanks from fair-software.nl!",
        text: mailBody,
    });
};

const getErrors = eventData => {
    const errors = {};
    for (let key of ['firstname', 'lastname', 'email']) {
        if (!eventData[key]) {
            errors[key] = 'Field is required';
        }
    }
    return errors;
};

const saveToFaunaDB = eventData => {
    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SERVER_SECRET
    });

    /* configure faunaDB Client with our secret */
    const q = faunadb.query;
    const newItem = {
        data: {
            firstname: eventData['firstname'],
            lastname: eventData['lastname'],
            email: eventData['email'],
        }
    };

    /* construct the fauna query */
    return client.query(q.Create(q.Ref('classes/endorsements'), newItem));
};

const sendSlackMessage  = eventData => {
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

    const body = JSON.stringify({
        text: 'Yay! Another endorsement: ' + JSON.stringify(eventData)
    });

    return fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
};

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
    try {
        const eventData = JSON.parse(event.body);
        const errors = getErrors(eventData);
        if (Object.keys(errors).length > 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({errors}),
            }
        }
        await saveToFaunaDB(eventData);
        await sendMail(eventData);
        await sendSlackMessage(eventData);
        return {
            statusCode: 200,
            body: JSON.stringify({})
        }
    } catch(e) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: e.toString() })
        }
    }
};