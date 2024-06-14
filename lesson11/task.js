/*
За допомогою StarWars Api https://swapi.dev/ та fetch API зробити наступне:
1. Використовуючи методи классу Promise отримати масив назв планет перших 10 id
2 Вивеcти в консоль назви всіх "starships" котрими володів Han Solo (id = 14):
2.1 Використовуючи методи классу Promise
2.2 Використовуючи async/await
3. Зібрати в масив назви всіх резидентів "residents", з усіх планет що були у фільмі "Return of the Jedi" (id = 3). Використовуйте async/await
Масив має мати наступний вигляд
 [
  {
     planetName: 'SomePlanet1',
     residents: ['Han Solo', 'r2d2']
   },
   {
     planetName: 'SomePlanet2',
     residents: ['Luke Skywalker', 'C3PO']
   }
 }
 */

/* fetch ('https://swapi.dev/')
    .then ((response) => response.json())
    .then ((json) => json())
    .catch((error) => console.log(error))
*/

// Classwork 1:15

let promisesArray = [];

console.time('promiseAll')

for (let i = 1; i < 6; i++) {
    promisesArray.push(fetch(`https://swapi.dev/api/planets/${i}`)
        .then((res) => res.json())
        .then((json) => json.name)
    )
}

const result = await Promise.all(promisesArray);

//const result2 = await Promise.allSettled(promisesArray); //Для дебага
//let fullfiledPromises = result.filter(promise => promise.status === 'fullfiled')

//console.log(result)
//console.timeEnd('promiseAll')
// finish

// let data = await fetch (`https://swapi.dev/api/planets`)
// let body = await data.json()
//
// let a = body//.residents
// console.log(a)



//2 Вивеcти в консоль назви всіх "starships" котрими володів Han Solo (id = 14):

let peoples = [];
 //   let searchedPerson = "Han Solo";

for (let i = 1; i <= 85; i++) {
    let data = await fetch (`https://swapi.dev/api/people/${i}/`)
    let body = await data.json()
    peoples.push(body.name)
}

console.log(peoples)

// function findPerson() {
//     for (let i = 0; i < peoples.length; i++) {
//         if (peoples.name === "Han Solo") return console.log("Y")
//     }
// }
//
// findPerson();




//first10planets.forEach(printPlanets);

// function printPlanets(planet, index, array) {
//     console.log(`${(index+1)}: ${array[index]}`);