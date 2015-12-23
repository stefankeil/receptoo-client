
## Client for recipe app 
based on boilerplate from https://github.com/jakemmarsh/react-rocket-boilerplate.git (thanks for that)

### Getting up and running
1. Clone the project
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

This boilerplate uses the latest versions of the following libraries:

- [ReactJS](https://github.com/facebook/react)
- [React Router](https://github.com/rackt/react-router)
- [RefluxJS](https://github.com/spoike/refluxjs)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)

Along with many Gulp libraries (these can be seen in either `package.json`, or at the top of each task in `/gulp/tasks/`).

---

### Running tests

1. If you haven't already, follow steps 1 & 2 above
2. If you haven't already run `gulp dev` or `gulp prod` at least once, run `gulp prod`
3. Run all tests in the `__tests__/` directory with the `gulp test` command
  * A single file can be run by specifing an `-f` flag: `gulp test -f <PATH_TO_TEST_FILE>`
    * In the `PATH_TO_TEST_FILE`, it is possible to omit the `__tests__/` prefix, as well as the `.test.js` suffix. They will be automatically added if not detected.

##### Code coverage

When running tests, code coverage will be automatically calculated and output to an HTML file using the [Istanbul](https://github.com/gotwarlost/istanbul) library. These files can be seen in the generated `__coverage__/` directory.
