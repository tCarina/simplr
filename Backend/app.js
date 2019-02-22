const express = require('express');
const app = express();
const bp = require('body-parser');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const usersRouter = require('./routes/users');
let users = require('./Routes/Users');


app.use(bp.urlencoded({ extended: false}));
app.use(bp.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {  
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
res.status(err.status || 500);
res.send(err);
});








app.use('/users', users)




app.get('*', (req, res) => {
    res.status(404).send('Error')
});

app.listen(3000, () => {
    console.log('Listening on port 3000.')
})
module.exports = app;