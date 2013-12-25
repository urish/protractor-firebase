protractor-firebase
===================

Firebase wrapper for use in Protractor tests.

Copyright (C) 2013, Uri Shaked <uri@urish.org>

[![Build Status](https://travis-ci.org/urish/protractor-firebase.png?branch=master)](https://travis-ci.org/urish/protractor-firebase)

Usage
-----
Use this module as a drop-in replacement for the [Firebase](https://npmjs.org/package/firebase) module.

This will add some new methods to your Firebase instances that are useful for interacting with Firebase inside your test code.
The methods integrate seamlessly with the [Web Driver Control Flow](https://github.com/angular/protractor/blob/master/docs/control-flow.md),
so you can assume that their operation completes before the next statement in the control flow is executing.

Below is the list of the new methods. They all return a webdriver.promise.Promise that is resolved
once the operation has been successfully completed:

* `$remove()` - Wrapper for [remove()](https://www.firebase.com/docs/javascript/firebase/remove.html)
* `$set(value)` - Wrapper for [set()](https://www.firebase.com/docs/javascript/firebase/set.html)
* `$setWithPriority(value, priority)` - Wrapper for [setWithPriority()](https://www.firebase.com/docs/javascript/firebase/setwithpriority.html)
* `$setPriority(priority)` - Wrapper for [setPriority()](https://www.firebase.com/docs/javascript/firebase/setpriority.html)
* `$update(value)` - Wrapper for [update()](https://www.firebase.com/docs/javascript/firebase/update.html)
* `$push(value)` - Wrapper for [push()](https://www.firebase.com/docs/javascript/firebase/push.html). The promise will be resolved with a [Firebase](https://www.firebase.com/docs/javascript/firebase/index.html) reference for the generated location.
* `$value(waits)` - Reads the data from the current location and returns a promise that will be resolved with the data. If `waits` it true, the promise will only be resolved once non null data has arrived.
* `$valueChange()` - Resolves once the data from current location has changed. The promise will be resolved with the new value.

License
----

Released under the terms of MIT License:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
