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

/* Classwork

 */

let promisesArray = [];

console.time('promiseAll')

for (let i = 1; i < 6; i++) {
    promisesArray.push(fetch(`https://swapi.dev/api/planets/${i}`)
        .then((res) => res.json())
        .then((json) => json.name)
    )
}


const result = await



    //let first10planets = [];



// for (let i = 1; i < 10; i++) {
//     let data = await fetch (`https://swapi.dev/api/planets/${i}`)
//     let body = await data.json()
//     first10planets.push(body.name)
// }

//const result = await Promise.all(promisesArray)
console.log(first10planets)



//1. Використовуючи методи классу Promise отримати масив назв планет перших 10 id/



//2 Вивеcти в консоль назви всіх "starships" котрими володів Han Solo (id = 14):