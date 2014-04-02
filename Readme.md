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

###Methods

> Arguments within [ ] are optional.

```javascript
/*
 * return a function bound to a scope and to a
 * series of arguments, passed through an array.
 */
Funny#bind( Function fn, Array args [, Object scope ] ) : Function

/*
 * returns a new function, bound to fn.
 * For example, to create a shortcut for toString.call:
 * var toString = Funny.mock( toString || Object.prototype.toString );
 * console.log( toString( [ 1, 2, 3 ] ) )
 */
Funny#mock( Function fn ) : Function

/*
 * an empty function
 */
Funny#emptyFn() : undefined

/*
 * return input as output
 */
Funny#echoFn( Object obj ) : Object

/*
 * a shortcut for Array.prototype.slice
 */
Funny#slice( Object arguments ) : Array

/*
 * a shortcut for toString || Object.prototype.toString
 */
Funny#toString( Object obj ) : String

```

###Sample Usage

> See [examples](example/).

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