const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// FILTER============>>>>>>>>>>>>>>>>>>>>
//--task

// Get characters with mass greater than 100
    // const charGreaterThan100 = characters.filter( character =>{
    //     return character.mass > 100
    // })
// const charGreaterThan100 = characters.filter( (character) =>
//      character.mass > 100
// )
// console.log("greater than 100", charGreaterThan100)

// // Get characters with height less than 200
// const getHeightLessThan200 = characters.filter(character => character.height < 200)
// console.log("less than 200 in height ===", getHeightLessThan200)

// // Get all male characters
// const maleChar = characters.filter(character => character.gender === "male")
// console.log("male characters", maleChar)

// // Get all female characters
// const femaleChar = characters.filter(character => character.gender === "female")
// console.log("female characters", femaleChar)


// // // MAP ========>>>>>>>>>>>>>>>>
// // Get an array of all names
// const namesArray = characters.map(char => char.name)
// console.log("names", namesArray)

// // Get an array of all heights
// const heightArr = characters.map(char => char.height)
// console.log("height test", heightArr)

// // Get an array of objects with just name and height properties
// const nameHeightProp = characters.map(
//     char =>( {name: char.name,
//     height: char.height})
// )
// // const nameHeightPropTest = characters.map(
// //     char => {char.name, char.height}
// // )
// console.log("The name and height ", nameHeightProp)

// // Get an array of all first names
// const firstNameArr = characters.map(char => char.name.split(" ")[0])
// console.log("first names", firstNameArr)
// // split gives an array of things seperated by spaces


// // REDUCE =========>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Get the total mass of all characters
// const totalMass = characters.reduce((accumulator, currentValue) => {
//     return accumulator + parseInt(currentValue.mass)
//     // parseint to conversit string to number
// }, 0);
// console.log("total mass",totalMass)

// // Get the total height of all characters
// const totalHeight = characters.reduce((accumulator, currentValue) =>  accumulator + parseInt(currentValue.height)
// , 0);
// console.log("total height",totalHeight)

// // Get the total number of characters in all the character names\
// const totalNameChar = characters.reduce((acc, curr) => acc + curr.name.length, 0)
// console.log("total name char", totalNameChar)

// // Get the total number of characters by eye color (hint. a map of eye color to count)
// const eyeColorCharNum = characters.reduce((acc, curr) => {
//     if (acc[curr.eye_color]) {
//         acc[curr.eye_color] = acc[curr.eye_color] + 1
//         // acc[curr.eye_color]++
//     } else {
//         acc[curr.eye_color] = 1;
//     }
//     return acc;
// }, {})
// console.log("char eye color", eyeColorCharNum)

// // SORT ==================>>>>>>>>>>>>>>>>>>...
// // Sort by mass
// const byMass = characters.sort((a, b) => {
//     return a.mass - b.mass 
// });
// console.log("sort by mass",byMass)
// const byMassDesc = characters.sort((a, b) => {
//     return b.mass - a.mass 
// });
// console.log("sort by mass descending",byMass)

// // Sort by height
// const sortHeight = characters.sort((a, b) => a.height - b.height)
// console.log("sort by height", sortHeight)

// // Sort by name
// const sortName = characters.sort((a,b) => {
//     if (a.name < b.name ) {
//         return -1
//     } else {
//         return 1;
//     }

//     // a.name < b.name ? -1 : 1;
// })
//     console.log("sort name", [...sortName])

// // Sort by gender
// const sortGender = characters.sort((a, b) => {
//     if(a.gender === "female") {
//         return -1;
//     }
//     else {
//         return 1;
//     }
// })
// console.log("sort by gender", sortGender)

// // EVERY  =================>>>>>>>>>>>>>>>>>>>> 
// // Does every character have blue eyes?
// const allBlueEyes = characters.every((char) => {
//     return char.eye_color === 'blue'}
// );
// console.log("all blue eyes", allBlueEyes)

// // Does every character have mass more than 40?
// const massMoreThan40 = characters.every((char) => char.mass > 40)
// console.log("mass more than 40", massMoreThan40)

// // Is every character shorter than 200?
// const shorterThan200 = characters.every((char) => char.height < 200)
// console.log("shorter than 200", shorterThan200)
// // Is every character male?
// const charMale = characters.every((char) => char.gender === 'male') 
// console.log("all male", charMale)

// // SOME ============>>>>>>>>>>>>>>>>
// // Is there at least one male character?
// const oneMale = characters.some(char => char.gender === "male")
// console.log("Atlest one male", oneMale)

// // Is there at least one character with blue eyes?
// const blueEyes = characters.some(char =>  char.eye_color === "blue")
// console.log("Has blue eyes", blueEyes)

// // Is there at least one character taller than 210?
// const tallerThan210 = characters.some(char => char.height === "210")
// console.log("Taller than 210", tallerThan210)

// // Is there at least one character that has mass less than 50?
// const massLess50 = characters.some(char => char.mass < 50)
// // console.log("less than 50", massLess50)
 
// // class getName {
    
// //     constructor (name) {
// //         this.name = 'new'
// //     }
// // }

// const getName = (firstName, lastName) => {
//     return firstName, lastName
// }

// console.log(getName.call(null, 'sean', 'es' ))



// write an algorithm that takes an array of numbers as input and cal the sum of those numbers.
// define the time complexity of that algorithm and determine what the lowest possible time complexity is for this problem

// function arrNum (numbers) {
//     let result = 0;
//     for ( const number of numbers ) {
//          result += numbers
//     }
//     return result 


// }
// console.log(arrNum([2,3,4]))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let start = 0;
// let end = arr.length - 1
// let target = 8;

// function binarySearch(arr, start, end, target) {
//     let midIndex = Math.floor(( start + end ) / 2);
//     if (arr[midIndex] === target){ 
//         return true;
//     }
//     if (arr[midIndex] > target) {
//         return binarySearch(arr, start, midIndex - 1, target)
//     } else {
//         return binarySearch(arr, midIndex + 1, end)
//     }
// }




// const baseUrl = `https://jsonplaceholder.typicode.com/todos/1`;
// fetch(baseUrl)
//     .then((res) => {
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(error)
//     })

const loadData = async () => {
    const baseUrl = `https://jsonplaceholder.typicode.com/todos/1`;
    const res = await fetch(baseUrl);
    const data = await res.json();
    console.log(data);
}

loadData()