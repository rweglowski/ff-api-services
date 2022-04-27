const search = require('recursive-search');
const path = require('path');
const fs = require('fs');

const results = search.recursiveSearchSync(/.Controller\.ts$/, path.join(__dirname, '..', 'src/service'));

let content = "export * from './index';\n";

for (const absoluteFilePath of results) {
    console.log('absoluteFilePath', absoluteFilePath);

    const relativeFilePath = absoluteFilePath
        .replace(path.join(__dirname, '..', 'src'), '.')
        .replace('.ts', '')
        .replace(new RegExp('\\' + path.sep, 'g'), '/');
    console.log('relativeFilePath', relativeFilePath);

    const splitFilePath = relativeFilePath.split('/');

    const exportLine = `export * as ${splitFilePath[splitFilePath.length - 2].concat(splitFilePath.pop())}  from '${relativeFilePath}';\n`;

    console.log('exportLine', exportLine);

    if (!content.includes(exportLine)) {
        content = content.concat(exportLine);
    }
}

console.log('content', content);
fs.writeFile(path.join(__dirname, '..', 'src/docs.ts'), content, (error) => console.log('error', error));
