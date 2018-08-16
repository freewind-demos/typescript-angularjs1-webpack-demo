AngularJS1 Directive Change Background Color Demo
=================================================

Define a directive to change background color, in [AngularJS1](https://angularjs.org/).

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Traps in the code
-----------------

### `app.directive('backgroundColor'`

The directive name must be camelCases, e.g. `backgroundColor`

If you use other formats, e.g. `background-color`, it will be ignored, silently.

### The api is quite complex

Just see <https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object>.

Resources
---------

- directive api: https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object
- $element api: https://docs.angularjs.org/api/ng/function/angular.element#angularjs-s-jqlite