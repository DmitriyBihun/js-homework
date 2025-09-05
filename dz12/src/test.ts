let userName : string = prompt('Enter your name:') ?? 'Guest'
let userAge : number = Number(prompt('Your age:'))

if(userAge > 17) {
    document.write(`Hello ${userName}`)
}
else {
    document.write(`Error`)
}