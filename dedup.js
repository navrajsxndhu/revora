/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

// I will just use a regex to find all models and workspace arrays.
// Then I will build a new schema.
// To make it simple, I will revert to a backup if I made one, or I can just parse and remove duplicates.
