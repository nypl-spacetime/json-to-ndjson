#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var H = require('highland');
var JSONStream = require('JSONStream');

if (process.stdin.isTTY && !argv._[0]) {
  return console.error('Usage: json-to-ndjson [-p path] [-o file] FILE\n' +
    '-p    json path. Default is \'*\' - see https://github.com/dominictarr/JSONStream\n' +
    '-o    output file. If not given, json-to-ndjson uses stdout');
}

var path = argv.p || '*';
var stream = ((argv._.length ? fs.createReadStream(argv._[0], 'utf8') : process.stdin));

var objects = stream
  .pipe(JSONStream.parse(path));

H(objects)
  .map(JSON.stringify)
  .intersperse('\n')
  .append('\n')
  .pipe(argv.o ? fs.createWriteStream(argv.o, 'utf8') : process.stdout);
