// import functions and grab DOM elements
import { renderZombie } from './render-utils.js';
const eliminatedNumberMg = document.querySelector('#eliminated-number');
const playerHpMg = document.querySelector('#player-hp');
const playerImgMg = document.querySelector('#player-img');
const form = document.querySelector('form');
const zombieListMg = document.querySelector('.zombies');
// let state
let eliminatedZombiesCount = 0;
let playerHP = 10;
let zombies = [
    { name: 'Chad', hp: 2 },
    { name: 'Miranda', hp: 4 },
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const zombieName = data.get('zombie-name');

    const newZombie = {
        name: zombieName,
        hp: Math.ceil(Math.random() * 5),
    };
    zombies.push(newZombie);
    form.reset();
    displayZombies();
});

function displayZombies(){
    zombieListMg.textContent = '';

    for (let zombie of zombies) {
        const zombieMg = renderZombie(zombie);

        if (zombie.hp > 0) {
            zombieMg.addEventListener('click', () =>{

                if (Math.random() < .33) {
                    zombie.hp--;
                    alert('you landed a blow😲😭🥳' + zombie.name);
                } else {
                    alert('you attempted to land a blow' + zombie.name + 'but you failed🤯😈');
                }
                if (Math.random() < .5) {
                    playerHP--;
                    alert(zombie.name + 'landed a blow 🙀🙍🏽‍♀️');
                } else {
                    alert(zombie.name + 'attempted to land a blow, but failed🥳💃🏾');
                }
                if (zombie.hp === 0){
                    eliminatedZombiesCount++;
                }
                if (playerHP === 0){
                    playerImgMg.classList.add('game-over');
                    alert('Game Over☠️!!!!!');
                }
                playerHpMg.textContent = playerHP;
                eliminatedNumberMg.textContent = eliminatedZombiesCount;
        
                displayZombies();
            });
        }
        zombieListMg.append(zombieMg);
    }
}

displayZombies();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
