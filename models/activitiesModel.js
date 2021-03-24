'use strict';


const db = require('./conn');

class  ActivitiesModel {
    constructor(id, activity_id) {
        this.id = id;
        this.activity_id = activity_id;
    }

    static async getActivitiesList() {
            const response = await db.any(`
            SELECT * FROM activities_list;`);
            return response

    }
    static async getUserActivities() {
        const userActivityData = db.one(`
        SELECT * FROM activities_list WHERE id = ${users_id}; `  
        );
        return userActivityData
    }

    static async addActivities(activity_id, title, date, time) {
        const response = await db.result(`INSERT INTO activities_list ( activity_id, title, date, time) VALUES ($1, $2, $3, false)`,

        [activity_id, title, date, time]
    );

    

        return response;
    }

    static async changeComplete(boolean, users_id) {
        const response = await db.result(` UPDATE activities_list SET complete = $1
        WHERE id = $2 , 
        
        [boolean, users_id]`
        );
            return response;
    }

    static async deleteActivity(id) {
        const response = await db.result(`DELETE FROM activities_list WHERE id = ${id}`);
        return response;
    }

}
module.exports = ActivitiesModel;