DROP DATABASE IF EXISTS simplr;
CREATE DATABASE simplr; 

\c simplr;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL, 
    pic_url VARCHAR, 
    bio VARCHAR
); 

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    postType VARCHAR NOT NULL, 
    postBody VARCHAR NOT NULL,
    caption VARCHAR NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY, 
    commenter_id INT REFERENCES users(id) ON DELETE CASCADE, 
    post_id INT REFERENCES posts(id) ON DELETE CASCADE, 
    body TEXT NOT NULL
);

    CREATE TABLE followings (
    id SERIAL PRIMARY KEY, 
    follower_id INT REFERENCES users(id) ON DELETE CASCADE, 
    following_id INT REFERENCES users(id) ON DELETE CASCADE    
);


INSERT INTO users (username, password_digest, pic_url, bio) VALUES ('messyClosets', 'abc123','https://www.drusillas.co.uk/images/whats-on-card/redpanda-profile-400x400-984.jpg', 'New to keeping things clean and simple.'), ('simplrGirl', '123abc','https://animals.sandiegozoo.org/sites/default/files/2016-08/category-thumbnail-arthropods%20copy.jpg', 'Organizing fanatic.'), ('cleanKitty','password','https://content.rspca.org.uk/cmsprd/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1233023624853&ssbinary=true','Master at pet cleanliness.')