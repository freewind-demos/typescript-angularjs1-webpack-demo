AngularJS1 Directive Compile Demo
=================================

In [AngularJS1](https://angularjs.org/), directive's `compile` function gives us a way to get the compiled element and attributes,
allow us to interact with DOM.

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Notice
------

1. `replace` must be `true`
2. `template` must have a root, can't be text only

Resources
---------

- directive api: https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object
- $element api: https://docs.angularjs.org/api/ng/function/angular.element#angularjs-s-jqlite