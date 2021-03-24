CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    username text, 
    email text,
    password varchar(200)
);


CREATE TABLE activities (
    id serial PRIMARY KEY,
    user_id integer REFERENCES users (id),
    title text,
    date text,
    time text,
    complete boolean,
    reminder boolean
);



CREATE TABLE activities_list (
    id serial PRIMARY KEY,
    activities_id integer REFERENCES activities (id),
    title text,
    date text,
    time text
);


CREATE TABLE favorite_activities (
    id serial PRIMARY KEY,
    user_id integer REFERENCES users (id),
    activities_id integer REFERENCES activities (id)
);

