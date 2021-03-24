INSERT INTO users (first_name, last_name, username, email, password)
    VALUES ('JoJo', 'Myles', 'jmyles1', 'jo.myles3112@gmail.com,', 'j'  ),
        ('Jay', 'Smith', 'jsmith', 'jsmith@gmail.com,', 'j2'  ),
        ('Lillie', 'Parker', 'lparker', 'lparker@gmail.com,', 'l'  ),

INSERT INTO activities (user_id, title, date, time, complete, reminder)
    VALUES (1, 'Hair appointment', '04/14/2021', '12:30pm', true, false),
        (1, 'Finish React Project', '03/24/2021', '2:00pm', false, true),
        (2, 'Go to the Store', '03/14/2021', '12:30pm', true, false),


INSERT INTO activities_list (activities_id, title, date, time)
    VALUES (1,'Hair appointment', '04/14/2021', '12:30pm'),
        (2, 'Finish React Project', '03/24/2021', '2:00pm'),
        (3, 'Go to the Store', '03/14/2021', '12:30pm');







    