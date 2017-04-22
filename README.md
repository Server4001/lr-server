# lr-server

## Command line Livereload server for use with the LiveReload Chrome browser extension.

### Usage

* `lr-server --port 35729 --path "src/js/**/*.js" --path "src/css/**/*.css"`
* `port` argument is optional, and defaults to `35729`.
* At least one `path` argument must be specified.

### TODO

* Tests
* Allow override of debounceDelay, interval, and cwd.
* Change host logged when LR server boots.
* Refactor executable code.
