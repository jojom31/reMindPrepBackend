const host = 'queenie.db.elephantsql.com',
    database = 'xwzbeuie',
    user = 'xwzbeuie',
    password = '0wOU-IdvbFnrITpWrTUTkxxy7zMOb8KR';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('Query:', event.query);
    }
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;