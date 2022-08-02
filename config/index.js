const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const MongoStore = require('connect-mongo'); // connecting to mongodb to create data

const session = require('express-session'); // middleware that gives us possibility to deal with sessions
const path = require('path');

function makesConfig(app) {
  app.set('view engine', 'hbs');
  app.use(express.urlencoded({ extended: false }));
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(
    session({
      name: 'hello-class',
      secret: process.env.SESSION_SECRET || 'lasdkfjghsdfklgjhsdfkljghsdfljkgh',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/mindblur',
      }),
    })
  );
  console.log(path.join(__dirname));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use((req, res, next) => {
    if (req.session.userId) {
      res.locals.isLoggedIn = true;
    }

    next();
  });
}

module.exports = makesConfig;
