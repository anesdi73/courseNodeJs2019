const teamName = "tooling";
const people = [
	{ name: "Jennie", role: "senior" },
	{ name: "Ronald", role: "junior" },
	{ name: "Martin", role: "senior" },
	{ name: "Anneli", role: "junior" }
];
const peopleName = people.map(p => p.name);
const seniors = people.filter(p => p.role === 'senior');

console.log(`There are ${people.length} people on the ${teamName} team. Their names are ${peopleName.join(", ")}. ${seniors.length} of them have a senior role`)