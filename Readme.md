###Funny
[![build status](https://secure.travis-ci.org/rootslab/funny.png?branch=master)](http://travis-ci.org/rootslab/funny) 
[![NPM version](https://badge.fury.io/js/funny.png)](http://badge.fury.io/js/funny)

[![NPM](https://nodei.co/npm/funny.png?downloads=true&stars=true)](https://nodei.co/npm/funny/)

[![NPM](https://nodei.co/npm-dl/funny.png)](https://nodei.co/npm/funny/)

> _Funny_, a jolly helper for functions.

###Install

```bash
$ npm install funny [-g]
// clone repo
$ git clone git@github.com:rootslab/funny.git
```

> __require__ returns an helper hash/obj with some properties/methods.

```javascript
var Funny  = require( 'funny' );
```

###Run Tests

```bash
$ cd funny/
$ npm test
```

###Sample Usage

> See [examples](example/).


###Methods

> Arguments within [ ] are optional.

```javascript
/*
 * Return a function bound to a scope and a series of arguments,
 * passed through an array.
 */
Funny#bind( Function fn, Array args [, Object scope ] ) : Function

/*
 * Empty function.
 */
Funny#emptyFn() : undefined

/*
 * Return input as output.
 */
Funny#echoFn( Object obj ) : Object

/*
 * Shortcut for ( typeof fn === 'function' ) ? fn : emptyFn;
 */
Funny#checkFn( Function fn ) : Function

/*
 * Shortcut for Array.isArray( arr ) ? arr : [];
 */
Funny#checkArr( Array arr ) : Array

/*
 * Return a new function, bound to fn.
 * For example, to create a shortcut for toString.call:
 *
 * var toString = Funny.mock( toString || Object.prototype.toString );
 * toString( [ 1, 2, 3 ] );
 */
Funny#mock( Function fn ) : Function

/* 
 * Recur is a method to bypass the tail call optimization problem,
 * this method use a 'trampolining' method for recursion, code was
 * based on https://github.com/Gozala/js-tail-call.
 */
Funny#recur( Function fn ) : Function

/*
 * Shortcut for Array.prototype.slice.call
 */
Funny#slice( Object arguments ) : Array

/*
 * Shortcut for Array.prototype.push.apply
 */
Funny#push( Array source [, Array dest ] ) : Number

/*
 * Shortcut for toString.call || Object.prototype.toString.call
 */
Funny#toString( Object obj ) : String

/*
 * Trigger a function execution before another one.
 *
 * NOTE: regardless of the order of activation/execution,
 * the 2 functions will run in parallel; it means that the first
 * function could also end its execution after the second one.
 */
Funny#trigger( Function fn, Function ln [, Object scope ] ) : Function

/*
 * Chaining functions execution. Every function will be executed
 * in order of appearence and will receive a callback argument to
 * execute the next function, optionally with some desired arguments. 
 *
 * If left was true, the callback is passed as the first
 * argument to the function, otherwise as the last argument.
 */
Funny#chain( Array functions [, Object scope [, Boolean left ] ] ) : Function

/*
 * Pre-execute a fn before another one.
 * The pre-executed function should call the callback,
 * passed as an argument, to launch the second function.
 *
 * If left was true, the callback is passed as the first
 * argument to the function, otherwise as the last argument.
 *
 * It is a shortcut for Funny#chain( [ fn , ln ], .. )
 */
Funny#precede( Function fn, Function ln [, Object scope [, Boolean left ] ] ) : Function

/*
 * Pre-execute a fn before another one ( expressed as an object property ),
 * replacing the latter with the fused function.
 *
 * The pre-executed function should call the callback, passed as an argument,
 * to launch the second function.
 *
 * If left was true, the callback is passed as the first argument
 * to the function, otherwise as the last argument.
 *
 * It is a shortcut for: obj[ fname ] = precede( fn, obj[ fname ], env );
 */
Funny#fuse( Function fn, Object obj, String fname [, Object scope [, Boolean left ] ] ) : Function

```

------------------------------------------------------------------------


### MIT License

> Copyright (c) 2014 &lt; Guglielmo Ferri : 44gatti@gmail.com &gt;

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

> __The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.__

> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN T