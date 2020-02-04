/* eslint strict: 0 */

'use strict';

const fs = require('fs');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const templates = require('./src/templates');
const argv = require('minimist')(process.argv.slice(2));

const BASE_ICON_DIR = './src/svg';
const ICON_DIRS = [
    { directory: '10px', width: 10, height: 10, header: '10 px icons'},
    { directory: '20px', width: 20, height: 20, header: '20 px icons'},
    { directory: '20px-color', width: 20, height: 20, header: '20 px color icons'},
    { directory: '24px', width: 24, height: 24, header: '24 px icons'},
    { directory: '24px-color', width: 24, height: 24, header: '24 px color icons'},
    { directory: '26px', width: 26, height: 26, header: '26 px icons' },
    { directory: '32px', width: 32, height: 32, header: '32 px icons' },
    { directory: '32px-color', width: 32, height: 32, header: '32 px color icons' },
    { directory: '40px', width: 40, height: 40, header: '40 px icons' },
    { directory: '40px-color', width: 40, height: 40, header: '40 px color icons' },
    { directory: '48px-color', width: 48, height: 48, header: '48 px color icons' },
    { directory: '50px-color', width: 50, height: 50, header: '50 px color icons' },
    { directory: '70x50px', width: 70, height: 50, header: '70x50 px color icons' },
    { directory: '56px', width: 56, height: 56, header: '56 px color icons' },
    { directory: '64px-color', width: 64, height: 64, header: '64 px color icons' },
    { directory: '70px', width: 70, height: 70, header: '70 px icons' },
    { directory: '70px-color', width: 70, height: 70, header: '70 px color icons' },
    { directory: '84x50px-color', width: 84, height: 50, header: '84x50  px color icons' },
    { directory: 'mega-menu-icons', width: 32, height: 32, header: 'Mega menu icons' }
];

const spriter = new SVGSpriter({
  shape: {
    id: {
      generator: 'icon-%s'
    }
  },
  mode: {
    symbol: true
  }
});

var iconDirs = [];

ICON_DIRS.forEach(dir => {
  iconDirs.push({ directory: dir.directory, width: dir.width, height: dir.height, header: dir.header, files: fs.readdirSync(BASE_ICON_DIR + '/' + dir.directory), icons: []});
});

iconDirs.forEach(iconDir => {
  iconDir.files.forEach(icon => {
    iconDir.icons.push(path.basename(icon, '.svg'));
  });
});

fs.writeFileSync(
  path.resolve(__dirname, 'README.md'),
  templates['README.md'](iconDirs)
);

iconDirs.forEach(iconDir => {
  iconDir.files.forEach(file => {
    const filePath = path.resolve(BASE_ICON_DIR + '/' + iconDir.directory, file);
    spriter.add(filePath, file, fs.readFileSync(filePath, 'utf8'));
  });
});

spriter.compile((err, result) => {
  const output = overwriteColor(
    result.symbol.sprite.contents.toString()
  );

  fs.writeFileSync(path.resolve(argv.out, 'icons.svg'), output);
  fs.writeFileSync(
    path.resolve(__dirname, 'index.js'),
    templates['index.js'](output)
  );
});

function overwriteColor(content) {
  return content.replace(
    /(fill="(#ff0000|#FF0000|#f00|#F00|red)")/g,
    'fill="currentColor"'
  );
}
