<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reduce

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Apply a function against an accumulator and each element in a collection and return the accumulated result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-reduce
```

</section>

<section class="usage">

## Usage

```javascript
var reduce = require( '@stdlib/utils-reduce' );
```

#### reduce( collection, initial, reducer\[, thisArg ] )

Applies a `function` against an accumulator and each element in a `collection` and returns the accumulated result.

```javascript
function sum( accumulator, value ) {
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var out = reduce( arr, 0, sum );
// returns 10
```

The `reducer` function is provided four arguments:

-   `accumulator`: accumulated value
-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

Basic support for dynamic collections is provided. Note, however, that index incrementation is monotonically increasing.

```javascript
function sum1( accumulator, value, index, collection ) {
    if ( index === collection.length-1 && collection.length < 10 ) {
        collection.push( index+2 );
    }
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var out = reduce( arr, 0, sum1 );
// returns 55

function sum2( accumulator, value, index, collection ) {
    collection.shift();
    return accumulator + value;
}

arr = [ 1, 2, 3, 4 ];

out = reduce( arr, 0, sum2 );
// returns 4
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( accumulator, value ) {
    this.count += 1;
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'count': 0
};

var out = reduce( arr, 0, sum, context );
// returns 10

var mean = out / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function differs from [`Array.prototype.reduce`][mdn-array-reduce] in the following ways:

    -   The function **requires** an `initial` value for the `accumulator`. The `initial` value is used during the first invocation of the `reducer` function.

    -   The function does **not** skip the first element in the `collection`.

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

        ```javascript
        function log( accumulator, value, index ) {
            console.log( '%s: %s', index, value );
            return accumulator;
        }

        var arr = [ 1, , , 4 ];

        var out = reduce( arr, 0, log );
        /* =>
            0: 1
            1: undefined
            2: undefined
            3: 4
        */
        ```

    -   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reduce = require( '@stdlib/utils-reduce' );

var arr;
var s;
var i;

function sum( acc, value ) {
    return acc + value;
}

arr = new Array( 1000 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i;
}

s = reduce( arr, 0, sum );
console.log( s );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-reduce.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-reduce

[test-image]: https://github.com/stdlib-js/utils-reduce/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-reduce/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-reduce/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-reduce?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-reduce.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-reduce/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-reduce/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

[mdn-array-reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

</section>

<!-- /.links -->
