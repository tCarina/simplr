const pgp = require('pg-promise')({});
const db = pgp('postgress://localhost:5432/simplr')

const getAllUsers = (req, res, next) => {
    db.any("SELECT * FROM users")
    .then(users => {
        res.status(200)
        .json({
            status: 'Success', 
            message: 'Retrieved all users.',
            users: users
            
        })
    })
    .catch(err => {
        res.status(400)
        .json({
          status: "failed",
          message: "Bad Request"
        })
        next(err);
  })
};


const getSingleUser = (req, res, next) => {
    db.one("SELECT * FROM users WHERE id=${id}", {id: req.params.id})
    .then(user => {
        res.status(200)
        .json({
            status: 'Success', 
            messgae: "Got user.", 
            user: user
        })
    })
    .catch(err => {
        res.status(400)
            .json({
              status: "failed",
              message: "Bad Request"
            })
            next(err);
      })
  };

const updateUser = (req, res, next) => {
    db.none('UPDATE users SET pic_url=${pic_url}, email=${email}, bio=${bio} WHERE id=${id}', {
        id: Number(req.params.id),
        pic_url: req.body.pic_url, 
        email: req.body.email, 
        bio: req.body.bio
    })
    .then(() => {
        res.status(200)
        .json({
            status: 'Success.',
            message: 'User updated.'
        })
    })
    .catch(err => {
        res.status(400)
        .json({
            status: 'Failed',
            message: 'Bad request.'
        }) 
        next(err);
    })
};

const deleteUser = (req, res, next) => {
    db.none('DELETE FROM users WHERE id=${id}', {
        id: Number(req.params.id)})
        .then(() => {
            res.status(200)
            .json({
                status: 'Success',
                message: 'User deleted.'
            })
        })
        .catch(err => {
            res.status(400)
            .json({
                status: 'Failed.',
                message: 'Bad request.'
            })
            next(err);
        })
};


module.exports = { getAllUsers, getSingleUser, updateUser, deleteUser }