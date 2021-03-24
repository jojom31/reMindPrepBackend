'use strict';

const express = require('express'),
    router = express.Router(),
    activityModel = require('../models/activitiesModel'),
    UserModel = require('../models/usersModel');


router.get('/', async (req, res, next) => {
    const user_id = 2;
    const activityList = await activityModel.getActivitiesList(user_id);
    res.json(activityList).status(200);
});

router.get('/:activities_list', async (req, res) => {
    const { id } = req.params;

    const {userActivityData} = await activitiesModel.getUserActivities(users_id);

    const activityInfo = {
        ...userActivityData,
    }
        
});



router.post('/addActivities', async(req, res, next) => {
    const { users_id, title, date, time } = req.body;

    const user_id = 1;
    const response = await activitiesModel.addActivities(user_id, title, date, time);

    if(response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})

router.post('/changeComplete', async(req,res, next) => {
    const { boolean, users_id } = req.body;
ac
    const response = await activitiesModel.changeComplete(boolean, users_id);

    if(response.rowCount >= 1){
        res.sendStatus(200);
    } else {
        res.send(500);
    }
})

router.delete('/:id', async(req, res, next) => {
    const { id } = req.params;

    const response = await activitiesModel.deleteActivity(id);
    res.sendStatus(200);


})



module.exports = router;