/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var scusumkbn = require( './../lib' );

var x = filledarrayBy( 10, 'float32', discreteUniform( 0, 100 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float32', discreteUniform( 0, 10 ) );
console.log( y );

scusumkbn( x.length, 0.0, x, 1, y, -1 );
console.log( y );
