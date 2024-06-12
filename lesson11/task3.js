/* 3 Зібрати в масив назви всіх резидентів "residents",
з усіх планет що були у фільмі "Return of the Jedi" (id = 3) */
/*{
	planetName: 'SomePlanet1',
		residents: ['Han Solo', 'r2d2']
},
*/
class objPlanetResidents {
	constructor(planetName, residents) {
		this.planetName = planetName;
		this.residents = residents;
	}
}

let finalArray = [];

let planets = []; // Массив URL планет из фильма возвращение джедая
let data = await fetch(`https://swapi.dev/api/films/3`);
let body = await data.json();
planets = body.planets;

let arrayIDplanets = []; // Массив с ID планет из фильма 3
for (let i = 0; i < planets.length; i++) {
	let a = planets[i].split('/');
	arrayIDplanets.push(a[a.length - 2]); // Минус 0, минус последний
}

let planetsNames = []; // Массив названий планет из фильма 3
for (let i = 0; i < planets.length; i++) {
	let data = await fetch(`https://swapi.dev/api/planets/${arrayIDplanets[i]}`);
	let body = await data.json();
	planetsNames.push(body.name);
	finalArray[i] = new objPlanetResidents(planetsNames[i], null);
}
//console.log(finalArray); // планеты есть, резидентов нет

// Иду по планетам, нахожу резидентов
let newArray = [];
for (let i = 0; i < planets.length; i++) {
	let planet = await fetch(planets[i]);
	let planetBody = await planet.json();
	newArray.push(planetBody.residents);
}
//console.log(newArray);
//console.log(newArray.length); //=5

let arrayIDresidents = [];
let result = [[]];
let iLoopTmp = [[]];
let jLoopTmp = [];

for (let i = 0; i < newArray.length; i++) {
	for (let j = 0; j < newArray[i].length; j++) {
		let tmp = newArray[i][j].split('/');
		jLoopTmp.push(tmp[tmp.length - 2]);
		//console.log(tmp); //[ 'https:', '', 'swapi.dev', 'api', 'people', '1', '' ]
	}
	console.log(`jLoop: ${jLoopTmp}`); // 1,2,4,6,7,8,9,11,43,62
	//iLoopTmp.push(jLoopTmp); //Почему впереди запятая?
	//console.log('iLoop:' + iLoopTmp);
	iLoopTmp[i] = jLoopTmp;
	jLoopTmp = [];
}
console.log('>>>iLoop:' + iLoopTmp);
