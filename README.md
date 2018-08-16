AngularJS1 Controller Demo
===========================

Define a controller in [AngularJS1](https://angularjs.org/).

```
npm install
open index.html
```

The traps in the code
---------------------

### `angular.module('app', [])`

`angular.module('app', [])` is to define a module, and `angular.module('app')` is to get a module.
The only difference is the second argument, but the behavior is completely different!

Why not give a better method name to guid user, rather than give error message in console like:

> angular.js:138 Uncaught Error: [$injector:modulerr] Failed to instantiate module app due to:
> Error: [$injector:nomod] Module 'app' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.

### `ng-app="app"`

The value `app` here should be equal to the one in `angular.module('app', [])`. Don't forget


