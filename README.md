# lr-server

## Command line Livereload server for use with the LiveReload Chrome browser extension.

### Usage

* `./node_modules/.bin/lr-server --port 35729 --path "src/js/**/*.js" --path "src/css/**/*.css"`
* `port` argument is optional, and defaults to `35729`.
* At least one `path` argument must be specified.
* Use `--debounce` or `-d` to specify delay for events called in succession for same file (default 500 milliseconds).
* Use `--interval` or `-i` to specify file watch interval (default 1000 milliseconds).

### TODO

* Tests
* Refactor executable code.
