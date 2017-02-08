# json-to-ndjson

Converts JSON array (or a JSON object containing a JSON array), to NDJSON.

## Installation

    npm install -g json-to-ndjson

## Usage

From stdin:

    cat file.json | json-to-ndjson

From file:

  json-to-ndjson file.json

## Options  

- `-p`: JSON path or array, default is `\'*\'`, see https://github.com/dominictarr/JSONStream
- `-o`: output file, if not given, json-to-ndjson writes to stdout
