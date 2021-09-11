// midlleware ga kerakli packagelarni o'rnatamiz...
const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');


// export qilib qo'yamiz use f(x)larini...
module.exports = function (app) {
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static('public'));
 app.use(express.static(path.join(__dirname, 'public')));
 // qaysi muhitda ishlayotganini bilish uchun...
 if (app.get('env') == 'development') {
  app.use(morgan('tiny'));
  console.log('dastur devlopment muhitida ishlayapti...');
 }
 app.use(helmet());
};


