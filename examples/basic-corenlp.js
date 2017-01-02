#!/usr/bin/env node

var request = require('request'),
  argv = require('yargs')
    .alias('c', 'content')
    .required('c')
    .default('url', 'http://104.196.178.202/')
    .argv;

request.post({
  headers: {'content-type': 'text/plain'},
  url: argv.url,
  body: argv.content,
  qs: {
    properties: JSON.stringify({
      annotators: "tokenize,ssplit,pos"
    })
  }
}, function (error, response, body) {
  console.log(error);
  console.log(body)
});

