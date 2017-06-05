# lr-server

## Command line Livereload server for use with the LiveReload Chrome browser extension.

### Usage

* `lr-server src/js/**/*.js src/css/**/*.css --port 35729`
* At least one `path` argument must be specified.
* Use `--port` or `-p` to specify port for the livereload server (default 35729).
* Use `--host` or `-o` to specify the host for the livereload server (default 127.0.0.1).
* Use `--debounce` or `-d` to specify delay for events called in succession for same file (default 500 milliseconds).
* Use `--interval` or `-i` to specify file watch interval (default 1000 milliseconds).

### TODO

* Tests
