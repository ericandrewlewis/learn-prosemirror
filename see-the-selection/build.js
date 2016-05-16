/**
 * The "build" script for our app.
 *
 * Transpiles our source code, which is written in ES6, into ES5, as
 * most browsers don't support ES6 yet (https://kangax.github.io/compat-table/es6/).
 *
 * Watches for source file changes and rebundles.
 */
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');

if (!fs.existsSync('dist')){
  fs.mkdirSync('dist')
}

var b = browserify('src/index.js', {
  plugin: [ watchify ]
})

// Whenever a file we're watching is updated, run the bundling taslk.
b.on('update', bundle)

// Bundle when we first invoke the build script.
bundle()

// Bundle the application's scripts into a single file for browser use.
function bundle() {
  process.stdout.write("Bundling source...");
  b.transform('babelify', {presets: ['es2015']})
    .bundle()
      .on('error', function(err){
        process.stdout.write("\n\033[31mBuild error\033[0m: ");
        process.stdout.write(err.message+"\n");
      })
      .pipe(fs.createWriteStream('dist/index.js'))
        .on('finish', () => {
          process.stdout.write("\033[32mcomplete\033[0m.\n");
        })
}
