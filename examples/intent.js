#!/usr/bin/env node

var request = require('request'),
  flatten = require('flat'),
  argv = require('yargs')
    .alias('c', 'content')
    .required('c')
    .default('url', 'http://104.197.106.242')
    .argv;

request.post({
  headers: {'content-type': 'text/plain'},
  url: argv.url,
  body: argv.content
}, function (error, response, body) {
  //console.log(body);
  var parsed = JSON.parse(body);
  var result = flatten(parsed);
  console.log(result);
});

