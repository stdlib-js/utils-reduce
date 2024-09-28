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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reduce

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a function against an accumulator and each element in an array and return the accumulated result.

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

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var reduce = require( '@stdlib/utils-reduce' );
```

#### reduce( arr, initial, reducer\[, thisArg ] )

Applies a function against an accumulator and each element in an array and returns the accumulated result.

```javascript
function sum( accumulator, value ) {
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var out = reduce( arr, 0, sum );
// returns 10
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var array = require( '@stdlib/ndarray-array' );

function sum( accumulator, value ) {
    return accumulator + value;
}

var opts = {
    'dtype': 'generic'
};
var arr = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );

var out = reduce( arr, 0, sum );
// returns 21
```

The applied function is provided the following arguments:

-   **accumulator**: accumulated value.
-   **value**: array element.
-   **index**: element index.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function sum( accumulator, value ) {
    this.count += 1;
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var ctx = {
    'count': 0
};

var out = reduce( arr, 0, sum, ctx );
// returns 10

var mean = out / ctx.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For input arrays, the function differs from [`Array.prototype.reduce`][mdn-array-reduce] in the following ways:

    -   The function **requires** an `initial` value for the `accumulator`. The `initial` value is used during the first invocation of the `reducer` function.
    -   The function does **not** skip the first array element.
    -   The function does **not** skip `undefined` elements.
    -   The function does **not** support dynamic array-like objects (i.e., array-like objects whose `length` changes during execution).

-   The function supports array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    var Complex64Array = require( '@stdlib/array-complex64' );
    var Complex64 = require( '@stdlib/complex-float32-ctor' );
    var realf = require( '@stdlib/complex-float32-real' );
    var imagf = require( '@stdlib/complex-float32-imag' );

    function sum( acc, z ) {
        var re1 = realf( acc );
        var im1 = imagf( acc );
        var re2 = realf( z );
        var im2 = imagf( z );
        return new Complex64( re1+re2, im1+im2 );
    }

    var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

    var v = reduce( x, new Complex64( 0.0, 0.0 ), sum );
    // returns <Complex64>

    var re = realf( v );
    // returns 16.0

    var im = imagf( v );
    // returns 20.0
    ```

-   For [`ndarray`][@stdlib/ndarray/ctor]-like objects, the function performs a reduction over the entire input [`ndarray`][@stdlib/ndarray/ctor] (i.e., higher-order [`ndarray`][@stdlib/ndarray/ctor] dimensions are flattened to a single-dimension).

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array-filled-by' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var array = require( '@stdlib/ndarray-array' );
var reduce = require( '@stdlib/utils-reduce' );

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create a two-dimensional ndarray (i.e., a matrix):
var x = array( filledarrayBy( 10, 'generic', fill ), {
    'dtype': 'generic',
    'flatten': true
});

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute the sum:
var out = reduce( x, 0, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'sum: %d', out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils-map`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>
-   <span class="package-name">[`@stdlib/utils-async/reduce`][@stdlib/utils/async/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in a collection and return the accumulated result.</span>
-   <span class="package-name">[`@stdlib/utils-reduce-right`][@stdlib/utils/reduce-right]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array while iterating from right to left and return the accumulated result.</span>

</section>

<!-- /.related -->

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-reduce.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-reduce

[test-image]: https://github.com/stdlib-js/utils-reduce/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-reduce/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-reduce/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-reduce?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-reduce.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-reduce/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-reduce/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-reduce/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-reduce/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-reduce/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-reduce/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-reduce/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-reduce/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-reduce/main/LICENSE

[mdn-array-reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

<!-- <related-links> -->

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils-for-each

[@stdlib/utils/map]: https://github.com/stdlib-js/utils-map

[@stdlib/utils/async/reduce]: https://github.com/stdlib-js/utils-async-reduce

[@stdlib/utils/reduce-right]: https://github.com/stdlib-js/utils-reduce-right

<!-- </related-links> -->

</section>

<!-- /.links -->
