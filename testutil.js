/* Js simple unit tests utility
 * v. 0.1.0 :: 11/05/2018 @ fs
 *
 *	API:
 *
 *		describe - group tests with description
 *
 *			params:
 *
 *				{string} msg - description message to display
 *				{function} callback - callback to execute grouped tests
 *	
 *		test - test assertion with message
 *
 *			params:
 *
 *				{expr} callback - expression to test
 *				{string} msg - message to display
 *	
 *		stats - show tests statistics
 *	
 *		clear - clear test output
 */

var testutil = (() => {

	let testCounter = 0;
	let assertionCounter = 0;
	let succeeded = 0;
	let failed = 0;
	
	function describe(msg, callback) {
		console.log('%c--- ' + msg + ' ---', 'color: cyan;');
		callback();
		testCounter++;
	}

	function test(expr, msg) {

		if (expr) {
			console.log('%c    Success: ' + msg, 'color: lightgreen;');
			succeeded++;
		} else {
			console.log('%c    Failed: ' + msg, 'color: red;');
			failed++;
		}
		assertionCounter++;

	}
	
	function stats () {
		console.log('--- Stats ---');
		console.log('    Total tests: ' + testCounter);
		console.log('    Total assertions: ' + assertionCounter);
		console.log('    Succeded: ' + succeeded);
		console.log('    Failed: ' + failed);
	}
	
	function clear() {
		console.clear();
	}
	
	return {
		test: test,
		describe: describe,
		stats: stats,
		clear: clear
	}
	
})();

// Example

var test = testutil.test;
var describe = testutil.describe;
var stats = testutil.stats;
var clear = testutil.clear;

// function to be tested
function foo(a) {

	[0, 1, 2].forEach(el => {test(a === el + (a - el), `a (${a}) should equal el (${ el + (a - el)})`); a++;});
	return a;
}

// tests
clear();

describe('foo function', function() {
	test(foo(0) === 3, 'foo() should return 3');
});

describe('foo function', function() {
	test(foo(1) === 4, 'foo() should return 4');
});

describe('foo function', function() {
	test(foo(2) === 5, 'foo() should return 5');
});

describe('foo function', function() {
	test(foo(20) === 23, 'foo() should return 22');
	test(foo(21) === 24, 'foo() should return 22');
});

stats();
