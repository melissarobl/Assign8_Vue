// function printMessage(message) {
//     console.log('Your message is: ' + message)
// }



//This is less common:
// const printMessage = function(message){
//     console.log('Your message is: ' + message)
// }

const printMessage = (message) =>{  //const not let because with function definitions, you won't be changing them
    console.log('Your message is: ' + message)
}
printMessage('hello')
printMessage('How are you?')


// function printWelcome() {
//     console.log('Welcome!')
// }

const printWelcome = () => {
    console.log('Welcome!')
}
printWelcome()