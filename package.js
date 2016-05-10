export var name = "d3-rs-svg";
export var version = "0.0.1";
export var description = "Creates a SVG element using D3v4.";
export var keywords = ["svg","redsift","d3","visualization"];
export var homepage = "https://github.com/redsift/d3-rs-svg";
export var license = "MIT";
export var author = {"name":"Rahul Powar","url":"https://medium.com/@rahulpowar"};
export var main = "distribution/d3-rs-svg.umd-es15.min.js";
export var repository = {"type":"git","url":"https://github.com/redsift/d3-rs-svg.git"};
export var scripts = {"serve":"gulp -o d3-rs-svg -g d3-selection serve","build":"gulp -o d3-rs-svg -g d3-selection build","pretest":"npm outdated && npm run build","test":"tape 'test/**/*-test.js' && eslint index.js src","version":"json2module package.json > package.js","prepublish":"npm run test"};
export var dependencies = {"d3-selection":"~0.7.0"};
export var devDependencies = {"babel-preset-es2015-rollup":"^1.1.0","browser-sync":"^2.12.5","del":"^2.2.0","eslint":"^2.8.0","gulp":"^3.9.1","gulp-rename":"^1.2.2","gulp-sourcemaps":"^2.0.0-alpha","gulp-uglify":"^1.5.3","gulp-util":"^3.0.7","jsdom":"~8.4.0","json2module":"~0.0.3","rollup":"^0.26","rollup-plugin-babel":"^2.4.0","rollup-plugin-includepaths":"^0.1.2","rollup-stream":"^1.4.1","tape":"4","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0","yargs":"^4.6.0"};