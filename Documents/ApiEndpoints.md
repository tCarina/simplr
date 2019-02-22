# API Endpoints

## HTML API

### Root
* `GET /`
  * loads React web app

## JSON API

### Users
* `POST /api/users`
  * Creates new user
* `GET /api/users/:userId`
  * Fetches single existing user profile
* `PATCH /api/users/:userId`
  * Allows user to update their profile
* `DELETE /api/users/:userId`
 * Deletes a user  

### Posts
* `GET /api/users/:userID/:postID`
  * Get one post for user 
* `GET /api/users/:userID/posts`
  * Get all posts for one user
* `POST /posts/post
  * Create a new post
* `PATCH /posts/:id
    * Edit post 
* `DELETE /api/users/:userID/:postID`
    * Deletes single post

### Comments
* `POST /comments`
    * Creates comment
* `PATCH /comment/:id`
    *Edits a single comment
* `DELETE /comment/:id`
    * Deletes a single comment       
