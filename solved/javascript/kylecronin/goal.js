function g(arg) {
	function goal(num) {
		return "g" + Array(num + 1).join('o') + 'al';
	}

	function recur(num) {
		return function (arg) {
			if (arg == 'al') {
				return goal(num);
			}
			return recur(num + 1);
		};
	}

	return recur(0)(arg);
}

console.log(g('al'));
console.log(g()('al'));
console.log(g()()()()('al'));

// try this with some of the other solutions:
var goo = g()();
console.log(goo()()('al')); // gooooal
console.log(goo('al')); // gooal
