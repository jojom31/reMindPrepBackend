'use strict';

const db = require('./conn'),
    bcrypt = require('bcryptjs');

class User {
    constructor (id, first_name, last_name, username, email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static async addUser (first_name, last_name, username, email, password) {
        try {
            const query = `INSERT INTO users (first_name, last_name, username, email, password) VALUES ('${first_name}', '${last_name}', '${username}', '${email}', '${password}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        }catch (error){
            return error.message;
        }
    }
    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }
    async login() {
        try {
            const query = `SELECT * FROM users WHERE username = '${this.username}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);
            if(!!isValid) {
                const { id, username } = response;
                return { isValid, user_id: id, username}
                }else {
                    return { isValid }
                }
            }catch (error) {
                return error.message;
            }
        }
        static async getUserInfo(user_id) {
            const query = `Select * from users Where id = '${user_id}';`;
            
        }
        static async activityList(user_id) {
            
        }  
        }
        
    
module.exports = User;