const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Welcome, ${username}, the chosen one`);

const selection = prompt('Which ball will you choose? Left, Middle, or Right? ')
if(selection === 'left'){
    console.log('You picked the grassy fighter, Trunkstomp')
}else if(selection === 'middle'){
        console.log('You picked the dark specter, Shadow');
    }if(selection === 'right'){
        console.log('You picked the sprite, Twinkle')};

const action = prompt('You see a fellow trainer hiding in the grass? What do you do? Fight, Avoid Them, or Go Train Some More? ')
if(action.toUpperCase === 'fight'){
    console.log('Its time to Battle!');
}else if(action.toUpperCase === 'avoid them'){
    console.log('You left the area');
}if(action.toUpperCase === 'go train some more'){
    console.log('You went to find a nice place to train');
    }