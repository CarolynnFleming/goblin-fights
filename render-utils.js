export function renderZombie(zombieData) {
    const zombieMg = document.createElement('div');
    const faceMg = document.createElement('p');
    const nameMg = document.createElement('p');
    const hpMg = document.createElement('p');

    zombieMg.classList.add('zombie');

    nameMg.textContent = zombieData.name;
    hpMg.textContent = zombieData.hp < 0 ? 0 : zombieData.hp;

    faceMg.textContent = zombieData.hp > 0 ? '🧟‍♂️' : '☠️';

    if (zombieData.hp < 0) {
        zombieMg.classList.add('dead');
    }
    zombieMg.append(nameMg,faceMg,hpMg);

    return zombieMg;
}