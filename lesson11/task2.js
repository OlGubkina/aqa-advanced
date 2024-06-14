// 2. Вивеcти в консоль назви всіх "starships" котрими володів Han Solo

let peoples = [];

for (let i = 1; i <= 15; i++) {
	let data = await fetch(`https://swapi.dev/api/people/${i}`);
	let body = await data.json();
	peoples.push(body.name);
}

function findAPersonID(personToFind) {
	for (let i = 0; i < 15; i++) {
		if (peoples[i] === personToFind) return i + 1;
	}
}

let perToFind = 'Han Solo';
let personsURL = await fetch(`https://swapi.dev/api/people/${findAPersonID(perToFind)}`);

let body = await personsURL.json();

console.log(`Vehicles for ${perToFind} are:`);

let personsStarships = body.starships;

for (let i = 0; i < personsStarships.length; i++) {
	let shipsURL = await fetch(personsStarships[i]);
	let shipsBody = await shipsURL.json();
	console.log(shipsBody.name);
}
