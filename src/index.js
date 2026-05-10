#!/usr/bin/env node

const { run } = require("./commands/scan-to-excel");

const folderPath = process.argv[2];

run(folderPath);
