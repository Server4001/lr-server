# lr-server

## Command line Livereload server for use with the LiveReload Chrome browser extension.

### Usage

* `lr-server src/js/**/*.js src/css/**/*.css --port 35729`
* At least one `path` argument must be specified.
* Use `--port` or `-p` to specify port for the livereload server (default 35729).
* Use `--host` or `-o` to specify the host for the livereload server (default 127.0.0.1).
* Use `--debounce` or `-d` to specify delay for events called in succession for same file (default 500 milliseconds).
* Use `--reload-delay` or `-r` to specify delay between file events and Livereload being called (default 0 milliseconds).
* Use `--interval` or `-i` to specify file watch interval (default 1000 milliseconds).
* Use `--quiet` or `-q` to specify that no console logging should be used for file events.

### Contributing

After cloning the repo to your machine, you will need to install the dependencies:

```bash
npm install
```

Then you can run the lr-server bin:

```bash
./bin/lr-server /path/to/some.tpl /path/to/another.css
```

Tests can be run via npm scripts:

```bash
npm test
```

For code coverage reports use the following. the `./coverage` dir will have HTML files showing actual lines covered.

```bash
npm run test:coverage
```
