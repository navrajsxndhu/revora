const fs = require('fs');

const content = fs.readFileSync('prisma/schema.prisma', 'utf8');
const models = {};
const output = [];
let inModel = false;
let modelName = "";
let modelLines = [];

const lines = content.split('\n');
for (const line of lines) {
    const match = line.match(/^model\s+(\w+)\s+\{/);
    if (match) {
        inModel = true;
        modelName = match[1];
        modelLines = [line];
    } else if (inModel) {
        modelLines.push(line);
        if (line.startsWith('}')) {
            inModel = false;
            if (!models[modelName]) {
                models[modelName] = true;
                output.push(...modelLines);
            }
        }
    } else {
        output.push(line);
    }
}

fs.writeFileSync('prisma/schema.prisma', output.join('\n'), 'utf8');
console.log("Schema deduplicated.");
