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

// MODULES //

var f32 = require( '@stdlib/number-float64-base-to-float32' );
var abs = require( '@stdlib/math-base-special-abs' );


// MAIN //

/**
* Computes the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - output array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var y = new Float32Array( x.length );
*
* var v = scusumkbn( 4, 0.0, x, 2, 1, y, 1, 0 );
* // returns <Float32Array>[ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function scusumkbn( N, sum, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var s;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	s = sum;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero element...
	if ( s === 0.0 ) {
		for ( i = 0; i < N; i++ ) {
			v = x[ ix ];
			if ( v !== 0.0 ) {
				break;
			}
			s = f32( s + v );
			y[ iy ] = s;
			ix += strideX;
			iy += strideY;
		}
	} else {
		i = 0;
	}
	c = 0.0;
	for ( ; i < N; i++ ) {
		v = x[ ix ];
		t = f32( s + v );
		if ( abs( s ) >= abs( v ) ) {
			c = f32( c + f32( f32( s - t ) + v ) );
		} else {
			c = f32( c + f32( f32( v - t ) + s ) );
		}
		s = t;
		y[ iy ] = f32( s + c );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = scusumkbn;
