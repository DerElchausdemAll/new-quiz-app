// Conditionals, when to use block-statements

const a = "A";
if (a === "A") {
	// multiple rows require a block-statement
	console.log(1);
	console.log(2);
}
// single lines don't require a block-statement
if (a === "A") console.log(1);
console.log(2);

if (a === "A") {
	console.log(1);
	console.log(2);
} else {
	// else if is just an if inside an else
	if (a === "B") {
	}
}

if (a === "A") {
	console.log(1);
	console.log(2);
} else console.log(3);

if (a === "A") {
	console.log(1);
	console.log(2);
} else if (a === "B") {
	// this is the same as line 17-21
}
