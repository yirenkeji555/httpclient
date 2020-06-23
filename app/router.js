'use strict';

module.exports = app => {
  app.router.get('/', 'httpclient.home');
};
