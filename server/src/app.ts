import express, { Express, Request, Response , Application } from 'express';
import path from 'path'
import cookieParser from 'cookie-parser'

import indexRouter from "./routes/index"
import usersRouter from "./routes/users";

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use((req, res, next) => {
//     res.render('error');
// });
export default app;
