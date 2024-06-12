// 1. Використовуючи методи классу Promise отримати масив назв перших 10 планет

let first10planets = [];

for (let i = 1; i <= 10; i++) {
    let data = await fetch (`https://swapi.dev/api/planets/${i}`)
    let body = await data.json()
    first10planets.push(body.name)
}

first10planets.forEach(printPlanets);

function printPlanets(planet, index, array) {
    console.log(`${(index+1)}: ${array[index]}`);
}