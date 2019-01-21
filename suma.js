const inventory = [
	{ type: "machine", value: 5000 },
	{ type: "machine", value: 650 },
	{ type: "duck", value: 10 },
	{ type: "furniture", value: 1200 },
	{ type: "machine", value: 77 }
];
let res;
res = 0;
inventory.forEach(i => (res += i.value));
console.log(res);

