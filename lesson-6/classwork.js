const sum = (initialNumber) => (initialNumber > 0 ? initialNumber : "-");

console.log(sum(0));
console.log(sum(1));

function testFunc(optionalProperties) {
	let userAge = optionalProperties?.userAge || 10;
	let userName = optionalProperties?.userName || "John";
	let userRole = optionalProperties?.userRole || "Admin";
	console.log(userAge);
	console.log(userName);
	console.log(userRole);
}

testFunc({ userAge: 20, userRole: "User" });

// анонимные функции - зачем?
// camelCase
// PascalCase
