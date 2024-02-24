//Ways of declaring variables and constants in JS

//Let's create a variable - it can be changed
let school = 'Minneapolis College'
school = 'Saint Paul College'
console.log(school)
school = 'Metro State'
console.log(school)
school = 'Minneaplolis College'
console.log(school)

//What about creating constants? (They can't be changed)
const language = 'JavaScript'
console.log(language)


//Why would you make a constant?
    //When you know you aren't going to change the information/variable
    //You can't accidentally change it, so it is safer


// let states = ['Minnesota', 'Wisconsin', 'Iowa']
// states.push('Michigan')
// console.log(states)

//can also use const with arrays (can be added to)
    const states = ['Minnesota', 'Wisconsin', 'Iowa']
    states.push('Michigan')
    console.log(states)
    //You can't redefine it, but you can add to it in terms of an array


//Things to watch out for with constant arrays and objects

// const address = {
//     number: '1501',
//     street: 'Hennepin Avenue',
//     city: 'Minneapolis',
// }

//any of these cause errors after declaring above object:
//     address = 1234
//     address = {}
//     address = { number: 100, street: 'Main St.', city: 'Saint Paul'}

//Can modify object with additional properties:
//     address.zip = '55403'
//     console.log(address)
//
// address.street = 'Hennepin Ave'  //change avenue to ave
// console.log(address)


//how to choose let vs. const
    //not sure? use LET
    //if you know you won't change data, use const
    //if you know you need to change data, use let

// often create objects from data in variables, of example:
    const number= '1501'
    const street= 'Hennepin Avenue'
    const city = 'Minneapolis'
// const address = {
//     number: number,
//     street: street,
//     city: city,
// }
// console.log(address)

//You can create a variable with let or const

// JS offers us a shorthand - if you create an object with variables,
// you can optionally omit the property name and JS will use the variable name as the property name
// can combine two versions in property set-up

let address = {
    number,  //assumes property name is also number
    street,
    city,
}
console.log(address)